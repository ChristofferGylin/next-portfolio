"use client"

import { useLanguageContext } from "@/contexts/Language"
import { aboutTexts } from "../About/aboutTexts"
import Octopus from "../Octopus"

const texts = {
    en: {
        greeting: 'Hi, my name is',
        tagline: 'I like building things with code',
    },
    sv: {
        greeting: 'Hej, jag heter',
        tagline: 'Jag tycker om att bygga saker med kod',
    }
}

const Hero = () => {

    const { language } = useLanguageContext()
    
        const content = language === 'en' ? texts.en : texts.sv
        const bodyText = language === 'en' ? aboutTexts.en.bodyText : aboutTexts.sv.bodyText
    return (
        <section className="w-full grid grid-cols-2 gap-32 p-24">
            <div className="aspect-square flex flex-col gap-6 overflow-hidden">
                <p>{content.greeting}</p>
                <h1>Christoffer Gylin</h1>
                <p className="text-4xl font-bold">{content.tagline}</p>
                <div className="flex flex-col gap-6 overflow-hidden text-xl">
                    {<p>{bodyText[0]}</p>}
                    {<p className="line-clamp-5">{bodyText[1]}..</p>}
                </div>
            </div>
        </section>
    )
}

export default Hero