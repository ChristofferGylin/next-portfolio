"use client"

import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

const Menu = () => {
    return (
        <header className="z-50 flex justify-between items-center p-2 h-full border-b foreground">
            <span className="flex text-2xl h-full items-center">CHRISTOFFER GYLIN</span>
            <DesktopMenu />
            <MobileMenu />
        </header>
    )
}

export default Menu