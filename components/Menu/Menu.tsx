"use client"

import { useLanguageContext } from "@/contexts/Language"
import MenuItem from "./MenuItem"
import LanguageSelector from "./LanguageSelector"

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
    const { language } = useLanguageContext()

    const content = language === 'en' ? texts.en : texts.sv

    return (
        <header className="flex justify-between p-2 h-full border-b foreground">
            <span className="text-2xl">CHRISTOFFER GYLIN</span>
            <nav className="flex gap-6">
                <ul className="flex justify-between gap-3">
                    <MenuItem href="/" title={content.home} highlighted />
                    <MenuItem href="/about" title={content.about} />
                    <MenuItem href="/portfolio" title={content.portfolio} />
                    <MenuItem href="/cv" title={content.cv} />
                    <MenuItem href="/contact" title={content.contact} />
                </ul>
                <LanguageSelector />
            </nav>
        </header>
    )
}

export default Menu