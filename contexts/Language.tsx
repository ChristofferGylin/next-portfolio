"use client"

import { createContext, useContext, useState } from "react";
import { type ReactNode } from "react";

type LanguageContextType = {
    cookieConsent: boolean | null;
    language: 'en' | 'se'
}

const defaultLanguageContext: LanguageContextType = {
    cookieConsent: false,
    language: 'en'
}

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext) 

export const LanguageProvider = ({children}: { children: ReactNode}) => {
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(null)
    const [language, setLanguage] = useState<'en' | 'se'>('en')

    return (
        <LanguageContext.Provider
            value={{
                cookieConsent,
                language
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => useContext(LanguageContext)