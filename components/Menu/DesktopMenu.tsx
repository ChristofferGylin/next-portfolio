"use client"

import { useLanguageContext } from "@/contexts/Language"
import LanguageSelector from "./LanguageSelector"
import MenuItem from "./MenuItem"
import { menuTitles } from "./menuTitles"

const DesktopMenu = () => {

    const { language } = useLanguageContext()

    const content = language === 'en' ? menuTitles.en : menuTitles.sv

    return (
        <nav className="hidden md:flex gap-3 h-full">
                <ul className="flex justify-between">
                    <MenuItem href="/" title={content.home} />
                    <MenuItem href="/about" title={content.about} />
                    <MenuItem href="/portfolio" title={content.portfolio} />
                    <MenuItem href="/cv" title={content.cv} />
                    <MenuItem href="/contact" title={content.contact} />
                </ul>
                <LanguageSelector />
        </nav>
    )
}

export default DesktopMenu