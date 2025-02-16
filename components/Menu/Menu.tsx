"use client"

import { setLanguageCookie } from "@/app/actions"
import { useLanguageContext } from "@/contexts/Language"
import { type AvailibleLanguages } from "@/types/language"
import Link from "next/link"
import sweFlag from "@/public/flags/se.svg"
import ukFlag from "@/public/flags/gb.svg"
import ImageButton from "../UI/ImageButton"
import MenuItem from "./MenuItem"

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

    const languageIndicatorPosition = language === 'en' ? 'translate-x-[34px]' : ''

    return (
        <header className="flex justify-between p-2 h-full border-b foreground">
            <span className="text-2xl">CHRISTOFFER GYLIN</span>
            <nav>
                <ul className="flex justify-between gap-3">
                    <MenuItem href="/" title={content.home} highlighted />
                    <MenuItem href="/about" title={content.about} />
                    <MenuItem href="/portfolio" title={content.portfolio} />
                    <MenuItem href="/cv" title={content.cv} />
                    <MenuItem href="/contact" title={content.contact} />
                    <li className="flex flex-col items-center">
                        <div className="flex justify-between w-[54px]">
                            <ImageButton src={sweFlag} alt='Change language to Swedish' callback={() => {onSetLanguage('sv')}} />
                            <p className="flex justify-center items-center">/</p>
                            <ImageButton src={ukFlag} alt='Change language to English' callback={() => {onSetLanguage('en')}} />
                        </div>
                        <div className={`flex w-[60px]`}>
                            <div className={`w-[26px] h-1 rounded-xl bg-cyan-400/80 transition-all duration-300 ease-in-out ${languageIndicatorPosition}`}></div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu