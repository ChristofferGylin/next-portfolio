"use client"

import { type AvailibleLanguages } from "@/types/language";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { createContext, useContext, useState } from "react";
import { type ReactNode } from "react";

type LanguageContextType = {
    cookieConsent: boolean | null;
    cookieConsentSetter: (value: boolean) => void;
    language: AvailibleLanguages;
    languageSetter: (selectedLanguage: AvailibleLanguages) => void;
    
}

const defaultLanguageContext: LanguageContextType = {
    cookieConsent: false,
    cookieConsentSetter: (value: boolean) => { },
    language: 'en',
    languageSetter: (selectedLanguage: AvailibleLanguages) => { }
}

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext) 

export const LanguageProvider = ({children, consent}: { children: ReactNode, consent: RequestCookie | undefined }) => {
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(consent === undefined || consent.value !== 'true' ? null : true)
    const [language, setLanguage] = useState<AvailibleLanguages>('en')
    
    const cookieConsentSetter = (value: boolean) => {
        setCookieConsent(value)
    }

    const languageSetter = (selectedLanguage: AvailibleLanguages) => {
        setLanguage(selectedLanguage)
    }

    return (
        <LanguageContext.Provider
            value={{
                cookieConsent,
                cookieConsentSetter,
                language,
                languageSetter,
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => useContext(LanguageContext)