import { Octokit } from "octokit";

const onctokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export async function GET() {

    try {
        const repos = await onctokit.request("GET /user/repos")

        console.log(repos)
        return Response.json(repos) 
    } catch {
        console.log('Error')
        return Response.json({error: 'Error'})
    }
}