"use client"

import { createContext, useContext, useState } from "react";
import { type ReactNode } from "react";

type LanguageContextType = {
    cookieConsent: boolean | null;
    cookieConsentSetter: (value: boolean) => void;
    language: 'en' | 'se';
    languageSetter: (selectedLanguage: 'en' | 'se') => void;
    
}

const defaultLanguageContext: LanguageContextType = {
    cookieConsent: false,
    cookieConsentSetter: (value: boolean) => { },
    language: 'en',
    languageSetter: (selectedLanguage: 'en' | 'se') => { }
}

export const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext) 

export const LanguageProvider = ({children}: { children: ReactNode}) => {
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(null)
    const [language, setLanguage] = useState<'en' | 'se'>('en')
    
    const cookieConsentSetter = (value: boolean) => {
        setCookieConsent(value)
    }

    const languageSetter = (selectedLanguage: 'en' | 'se') => {
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