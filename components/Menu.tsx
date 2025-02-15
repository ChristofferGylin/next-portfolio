"use client"

import { setLanguageCookie } from "@/app/actions"
import { useLanguageContext } from "@/contexts/Language"
import { type AvailibleLanguages } from "@/types/language"
import Link from "next/link"
import sweFlag from "@/public/flags/se.svg"
import ukFlag from "@/public/flags/gb.svg"
import ImageButton from "./UI/ImageButton"

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

    const onSetLanguage = (newLang: AvailibleLanguages) => {
        languageSetter(newLang)
        
        if (cookieConsent) {
            setLanguageCookie(newLang)
        }
    }

    const languageIndicatorPosition = language === 'en' ? 'col-start-3' : ''

    return (
        <header className="flex justify-between p-2 h-full border-b foreground">
            <span className="text-2xl">CHRISTOFFER GYLIN</span>
            <nav>
                <ul className="flex justify-between gap-3">
                    <li><Link href='/'>{content.home}</Link></li>
                    <li><Link href='/about'>{content.about}</Link></li>
                    <li><Link href='/portfolio'>{content.portfolio}</Link></li>
                    <li><Link href='/cv'>{content.cv}</Link></li>
                    <li><Link href='/contact'>{content.contact}</Link></li>
                    <li>
                        <div className="grid grid-cols-3 w-16">
                            <ImageButton src={sweFlag} alt='Change language to Swedish' callback={() => {onSetLanguage('sv')}} />
                            <p className="flex justify-center items-center">/</p>
                            <ImageButton src={ukFlag} alt='Change language to English' callback={() => {onSetLanguage('en')}} />
                        </div>
                        <div className="grid grid-cols-3 w-16">
                            <div className={`w-full h-1 rounded-xl bg-cyan-400/80 transition-all duration-500 ${languageIndicatorPosition}`}></div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu