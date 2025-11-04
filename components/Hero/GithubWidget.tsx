import changeValueGradually from "@/utils/changeValueGradually"
import { useEffect, useState } from "react"

const GithubWidget = () => {

    type LanguagePercent = { 
        value: number;
        displayValue: number;
    }

    const [languages, setLanguages] = useState<Record<string, LanguagePercent>>({"TypeScript": {value: 0, displayValue: 0}, "JavaScript": {value: 0, displayValue: 0}, "HTML": {value: 0, displayValue: 0}, "C++": {value: 0, displayValue: 0}, "CSS": {value: 0, displayValue: 0}})

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
                            newLanguages[lang].displayValue = value
                    
                            return newLanguages
                        })
                    }
                })

                setLanguages((old) => {
                    const newLanguages = {...old}
                    newLanguages[lang].value = data[lang]
                    
                    return newLanguages
                })

                
            }
        }

        fetchData()
    }, [])

    return (
        <div className="w-full aspect-square border foreground rounded-xl flex justify-center items-center">
            <ul className="w-full p-4">
                {Object.entries(languages).map(([key, lang]) => {
                return (
                    <li className="w-full flex justify-between" key={key}>
                        <div className="w-full">
                            <div className="w-full flex justify-between" >
                                <span>{key}</span> <span>{lang.displayValue}%</span>
                            </div>
                            <div className="w-full h-6 flex justify-end">
                                <div style={{width: `${lang.value}%`}} className="bg-teal-400 h-6 rounded-xl transition-[width] duration-[2s]"></div>
                            </div>
                        </div>
                    </li>)
            })}
            </ul>
            
        </div>
    )
}

export default GithubWidget