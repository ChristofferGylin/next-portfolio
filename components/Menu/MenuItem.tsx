"use client"

import Link from "next/link"
import Indicator from "../UI/Indicator";
import { usePathname } from "next/navigation";

type MenuItemProps = {
    href: string;
    title: string;
    highlighted?: boolean
}

const MenuItem = ({ href, title, highlighted = false }: MenuItemProps) => {

    const pathname = usePathname()

    console.log(pathname)

    if (pathname === href) {
        highlighted = true
    }

    return (
        <div className="menu-grid-rows">
            <li className={`${highlighted ? 'text-cyan-300' : ''} text-lg transition-all duration-300 h-[21px] ease-in-out row-start-2 justify-self-center self-start`}><Link href={href}>{title}</Link></li>
            {highlighted && <Indicator width="w-full" style="row-start-3 justify-self-center self-center" />}
        </div>
    )
}

export default MenuItem