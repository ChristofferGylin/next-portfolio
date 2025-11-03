import batchFetch from "@/utils/batchFetch";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export async function GET() {

    try {
        const repos = await octokit.request("GET /user/repos")

        const reposWithLanguages = await batchFetch(repos.data, 8, async (repo) => {
        try {
            const res = await octokit.request(`GET ${repo.languages_url}`);
            return { ...repo, languages: res.data };
        } catch (err) {
            console.warn(`Failed to fetch languages for ${repo.full_name}`);
            return { ...repo, languages: {} };
        }
        })


        console.log('*************************************')
        console.log('*************************************')
        console.log('*************************************')
        
        console.log('number of repos:', repos.data.length)

        for (const repo of repos.data) {

            console.log(repo.name)

        }
        

        console.log('number of repos with language:', reposWithLanguages.length)

        for (const withLanguage of reposWithLanguages) {

            console.log(withLanguage.name)
            console.log(withLanguage.languages)

        }

        return Response.json(repos) 
    } catch {
        console.log('Error')
        return Response.json({error: 'Error'})
    }
}