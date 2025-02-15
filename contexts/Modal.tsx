"use client"

import { createContext, JSX, useContext, useState, type ReactNode } from "react";

type ModalContextType = {
    modal: JSX.Element | null;
    modalSetter: (modal: JSX.Element | null) => void;
}

const defaultModalContext: ModalContextType = {
    modal: null,
    modalSetter: (modal: JSX.Element | null) => { },
}

export const ModalContext = createContext<ModalContextType>(defaultModalContext) 

export const ModalProvider = ({children}: { children: ReactNode}) => {
    const [modal, setModal] = useState<JSX.Element | null>(null)
    
    const modalSetter = (newModal: JSX.Element | null) => {
        setModal(newModal)
    }

    return (
        <ModalContext.Provider
            value={{
                modal,
                modalSetter,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)