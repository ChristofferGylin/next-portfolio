"use client"

import { type AvailibleLanguages } from "@/types/language";
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

export const LanguageProvider = ({children, consent, cookieLanguage}: { children: ReactNode, consent: boolean | null, cookieLanguage: AvailibleLanguages }) => {
    
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(consent)
    const [language, setLanguage] = useState<AvailibleLanguages>(cookieLanguage)
    
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