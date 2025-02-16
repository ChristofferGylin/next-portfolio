"use client"

import DesktopMenu from "./DesktopMenu"

const Menu = () => {
    return (
        <header className="flex justify-between items-center p-2 h-full border-b foreground">
            <span className="flex text-2xl h-full items-center">CHRISTOFFER GYLIN</span>
            <DesktopMenu />
        </header>
    )
}

export default Menu