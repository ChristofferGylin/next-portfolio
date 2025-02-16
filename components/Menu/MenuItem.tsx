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

    if (pathname === href) {
        highlighted = true
    }

    return (
        <div className=" md:menu-grid-rows">
            <li className={`${highlighted ? 'underline underline-offset-4' : 'hover:text-sky-100'}  text-lg transition-all duration-300 h-[21px] ease-in-out row-start-2 justify-self-center self-start`}><Link href={href}>{title}</Link></li>
        </div>
    )
}

export default MenuItem