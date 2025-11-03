import { useEffect, useState } from "react"

const GithubWidget = () => {

    const [repoInfo, setRepoInfo] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/api/github')
            const parsed = await data.json()

            console.log(parsed)
            
            setRepoInfo(parsed)
        }

        fetchData()
    }, [])

    return (
        <div className="w-full aspect-square border foreground rounded-xl flex justify-center items-center">
            <h1>Github</h1>
        </div>
    )
}

export default GithubWidget