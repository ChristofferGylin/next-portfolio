"use client"

import { useModalContext } from "@/contexts/Modal"
import { useEffect, useRef } from "react"

const ModalContainer = () => {

    const {modal, modalSetter} = useModalContext()

    const modalRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const onClick = (e: MouseEvent) => {
            if (!modalRef.current) return
            if (!modalRef.current.contains(e.target as Node)) {
                modalSetter(null)
            }
        }

        window.addEventListener('mousedown', onClick)

        return () => { window.removeEventListener('mousedown', onClick) }
    }, [modalSetter])

    if (modal === null) {
        return <></>
    }

    

    return (
        <div className="z-30 fixed w-screen h-screen flex justify-center items-center bg-white/5 backdrop-blur">
            <div ref={modalRef}>{modal}</div>
        </div>
    )
}

export default ModalContainer