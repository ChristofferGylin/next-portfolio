import batchFetch from "@/utils/batchFetch";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export async function GET() {


    try {
        const repos = await octokit.request("GET /user/repos", {
            per_page: 20,
            visibility: "all",
            sort: "pushed",
            direction: "desc",
            
        })

        const languagesFromRepos = await batchFetch(repos.data, 8, async (repo) => {
            try {
                const res = await octokit.request(`GET ${repo.languages_url}`);
                return { languages: res.data };
            } catch (err) {
                console.warn(`Failed to fetch languages for ${repo.full_name}`);
                return
            }
        })

        const languagesCalculated: Record<string, number> = {}
        
        for (const repo of languagesFromRepos) {
            for (const key in repo?.languages) {
                if (languagesCalculated[key]) {
                    languagesCalculated[key] = languagesCalculated[key] + repo.languages[key]
                } else {
                    languagesCalculated[key] = repo.languages[key]
                }
            }
        }

        const languagesSorted = Object.entries(languagesCalculated).sort((a, b) => b[1] - a[1])

        let totalBytes = languagesSorted.reduce((sum, [, bytes]) => sum + bytes, 0)
        let other = 0

        const languagePercentages: [string, number][] = []

        for (const lang of languagesSorted) {
            const percent = lang[1] / totalBytes * 100

            if (percent < 1) {
                other += percent
            } else {
                languagePercentages.push([lang[0], lang[1] / totalBytes * 100])
            } 
        }

        languagePercentages.push(['Other', other])

        return Response.json(languagePercentages) 
    } catch {
        console.log('Error')
        return Response.json({error: 'Error'})
    }
}