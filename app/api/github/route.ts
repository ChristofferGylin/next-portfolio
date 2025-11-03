import batchFetch from "@/utils/batchFetch";
import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export async function GET() {


    try {
        const repos = await octokit.request("GET /user/repos", {
            per_page: 100,
            visibility: "all",
            sort: "pushed",
            direction: "desc",
            
        })

        const languages = await batchFetch(repos.data, 8, async (repo) => {
        try {
            const res = await octokit.request(`GET ${repo.languages_url}`);
            return { languages: res.data };
        } catch (err) {
            console.warn(`Failed to fetch languages for ${repo.full_name}`);
            return
        }
        })

        return Response.json(languages) 
    } catch {
        console.log('Error')
        return Response.json({error: 'Error'})
    }
}