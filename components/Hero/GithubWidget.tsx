import { useEffect, useState } from "react"

const GithubWidget = () => {

    const [languages, setLanguages] = useState<Record<string, number>>({"TypeScript": 0, "JavaScript": 0, "HTML": 0, "C++": 0, "CSS": 0, "Other": 0})

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/github')
            const data: Record<string, number> = await res.json()

            for (const lang in data) {
                setLanguages((old) => {
                    const newLanguages = {...old}
                    newLanguages[lang] = data[lang]
                    
                    return newLanguages
                })
            }
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