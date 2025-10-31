import { Octokit } from "octokit";

const onctokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

export async function GET() {

    try {
        const result = await onctokit.request("GET /repos/ChristofferGylin")

        console.log(result)
        return result
    } catch {
        console.log('Error')
    }
}