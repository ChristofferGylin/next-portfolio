"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

type MenuItemProps = {
    href: string;
    title: string;
    highlighted?: boolean
    Icon?: IconType
}

const MenuItem = ({ href, title, highlighted = false, Icon }: MenuItemProps) => {

    const pathname = usePathname()

    if (pathname === href) {
        highlighted = true
    }

    return (
        <div className=" md:menu-grid-rows md:border-0 flex items-center p-2 border-b last:border-0 border-slate-400/10 w-48 md:w-fit">
            <li className={`${highlighted ? 'underline underline-offset-4' : 'hover:text-sky-100'}  text-lg transition-all duration-300 md:h-[21px] ease-in-out row-start-2 justify-self-center self-start`}>
                <Link href={href} className="flex gap-2 items-center">
                    {Icon && <Icon />}
                    {title}
                </Link>
            </li>
        </div>
    )
}

export default MenuItem