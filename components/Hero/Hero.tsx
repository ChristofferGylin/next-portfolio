"use client"

import { useLanguageContext } from "@/contexts/Language"
import GithubWidget from "./GithubWidget"

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
    return (
        <section className="w-full grid grid-cols-2 gap-32 p-24">
            <div className="flex flex-col gap-2">
                <p>{content.greeting}</p>
                <h1>Christoffer Gylin</h1>
                <p className="text-4xl font-bold">{content.tagline}</p>
                <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae molestias voluptatum repellendus quod delectus tenetur deserunt, iste explicabo aliquam quasi voluptatem dolorem minima impedit sint quo rerum possimus eveniet mollitia magnam eligendi. Dolore commodi harum ea suscipit, nulla est repudiandae blanditiis maiores doloribus quod quia in quasi repellendus minus, pariatur quae obcaecati illo eligendi deserunt molestiae aperiam rem ab! Consectetur vero, eligendi laborum tempore ipsum mollitia animi quibusdam facilis corrupti! Aperiam quidem repellat vero incidunt molestiae, optio deleniti autem doloremque ipsa saepe laboriosam nostrum provident. Atque, facere magnam minima quod autem velit ipsa harum non deserunt maxime, numquam sit sint?</p>
            </div>
            <GithubWidget />
        </section>
    )
}

export default Hero