import Link from "next/link"

type MenuItemProps = {
    href: string;
    title: string;
    highlighted?: boolean
}

const MenuItem = ({ href, title, highlighted = false }: MenuItemProps) => {

    return <li className={`${highlighted ? 'text-cyan-300' : ''} text-lg transition-all duration-300 ease-in-out`}><Link href={href}>{title}</Link></li>
}

export default MenuItem