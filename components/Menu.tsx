"use client"

import { useLanguageContext } from "@/contexts/Language"
import Link from "next/link"

const texts = {
    en: {
        home: 'Home',
        about: 'About me',
        portfolio: 'Portfolio',
        cv: 'CV',
        contact: 'Contact',
    },
    sv: {
        home: 'Hem',
        about: 'Om mig',
        portfolio: 'Portfolio',
        cv: 'CV',
        contact: 'Kontakt',
    }
}

const Menu = () => {
    const { cookieConsent, language, languageSetter } = useLanguageContext()

    const content = language === 'en' ? texts.en : texts.sv

    const onSetLanguage = (newLang: 'sv' | 'en') => {
        languageSetter(newLang)
        console.log(language)
        // set cookie if consent
    }

    const languageIndicatorPosition = language === 'en' ? 'col-start-3' : ''

    return (
        <header className="flex justify-between p-2 h-full bg-slate-700">
            <h1>CHRISTOFFER GYLIN</h1>
            <nav>
                <ul className="flex justify-between gap-3">
                    <li><Link href='/'>{content.home}</Link></li>
                    <li><Link href='/about'>{content.about}</Link></li>
                    <li><Link href='/portfolio'>{content.portfolio}</Link></li>
                    <li><Link href='/cv'>{content.cv}</Link></li>
                    <li><Link href='/contact'>{content.contact}</Link></li>
                    <li>
                        <div className="grid grid-cols-3 w-16">
                            <button className="flex justify-center items-center" onClick={() => {onSetLanguage('sv')}}>SV</button>
                            <p className="flex justify-center items-center">/</p>
                            <button className="flex justify-center items-center" onClick={() => {onSetLanguage('en')}}>EN</button>
                        </div>
                        <div className="grid grid-cols-3 w-16">
                            <div className={`w-full h-1.5 rounded-xl bg-cyan-400 transition-all duration-500 ${languageIndicatorPosition}`}></div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu