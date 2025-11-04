import changeValueGradually from "@/utils/changeValueGradually"
import { useEffect, useState } from "react"

const GithubWidget = () => {

    const [languages, setLanguages] = useState<Record<string, number>>({"TypeScript": 0, "JavaScript": 0, "HTML": 0, "C++": 0, "CSS": 0, "Other": 0})

    useEffect(() => {
        const fetchData = async () => {

            const animationDuration = 5000

            const res = await fetch('/api/github')
            const data: Record<string, number> = await res.json()

            for (const lang in data) {

                changeValueGradually({
                    startValue: 0,
                    startTime: Date.now(),
                    endValue: data[lang],
                    duration: animationDuration,
                    callback: (value) => {
                        setLanguages((old) => {
                            const newLanguages = {...old}
                            newLanguages[lang] = value
                    
                            return newLanguages
                        })
                    }
                })

                
            }
        }

        fetchData()
    }, [])

    return (
        <div className="w-full aspect-square border foreground rounded-xl flex justify-center items-center">
            <ul>
                {Object.entries(languages).map(([key, value]) => {
                return <li className="flex" key={key}>{key} {value}</li>
            })}
            </ul>
            
        </div>
    )
}

export default GithubWidget