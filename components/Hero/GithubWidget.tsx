import changeValueGradually from "@/utils/changeValueGradually"
import { useEffect, useState } from "react"

const GithubWidget = () => {

    const [languages, setLanguages] = useState<Record<string, number>>({"TypeScript": 0, "JavaScript": 0, "HTML": 0, "C++": 0, "CSS": 0})

    useEffect(() => {
        const fetchData = async () => {

            const animationDuration = 2000

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
            <ul className="w-full p-4">
                {Object.entries(languages).map(([key, value]) => {
                return (
                    <li className="w-full flex justify-between" key={key}>
                        <div className="w-full">
                            <div className="w-full flex justify-between" >
                                <span>{key}</span> <span>{value}%</span>
                            </div>
                            <div className="w-full h-6 flex justify-end">
                                <div style={{width: `${value}%`}} className="bg-teal-400 h-6 rounded-xl"></div>
                            </div>
                        </div>
                    </li>)
            })}
            </ul>
            
        </div>
    )
}

export default GithubWidget