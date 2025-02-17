import { useLanguageContext } from "@/contexts/Language"
import LanguageSelector from "./LanguageSelector"
import MenuItem from "./MenuItem"
import { menuTitles } from "./menuTitles"
import { useState } from "react"
import { IoMenu, IoClose, IoHome, IoInformationCircle, IoFolder } from "react-icons/io5";
import { PiReadCvLogo } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import IconButton from "../UI/IconButton"

const MobileMenu = () => {

    const { language } = useLanguageContext()
    const [visible, setVisible] = useState(true)

    const content = language === 'en' ? menuTitles.en : menuTitles.sv

    const toggleMenu = () => {
        setVisible((old) => !old)
    }

    return (
        <nav className="flex md:hidden gap-3">
            <LanguageSelector />
            <IconButton Icon={visible ? IoClose : IoMenu} size="text-2xl" callback={toggleMenu}/>
            <ul className={`z-50 fixed top-0 right-0 flex flex-col justify-start foreground rounded-bl-lg mt-[3rem] transition-all duration-300 ease-in-out ${!visible ? 'w-0' : 'w-48 border-b border-l'}`}>
                <MenuItem href="/" title={content.home} Icon={IoHome} />
                <MenuItem href="/about" title={content.about} Icon={IoInformationCircle} />
                <MenuItem href="/portfolio" title={content.portfolio} Icon={IoFolder} />
                <MenuItem href="/cv" title={content.cv} Icon={PiReadCvLogo} />
                <MenuItem href="/contact" title={content.contact} Icon={MdAlternateEmail} />
            </ul>
        </nav>
    )
}

export default MobileMenu