import { useLanguageContext } from "@/contexts/Language"
import LanguageSelector from "./LanguageSelector"
import MenuItem from "./MenuItem"
import { menuTitles } from "./menuTitles"
import { useState } from "react"
import { IoMenu, IoClose } from "react-icons/io5";
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
            <ul className={`z-50 fixed top-0 left-0 h-screen w-screen flex flex-col justify-start gap-1 foreground my-[3rem] ${!visible && 'hidden'}`}>
                <MenuItem href="/" title={content.home} />
                <MenuItem href="/about" title={content.about} />
                <MenuItem href="/portfolio" title={content.portfolio} />
                <MenuItem href="/cv" title={content.cv} />
                <MenuItem href="/contact" title={content.contact} />
            </ul>
        </nav>
    )
}

export default MobileMenu