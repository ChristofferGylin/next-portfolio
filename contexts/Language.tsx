"use client"

import { assertAvailibleLanguage, type AvailibleLanguages } from "@/types/language";
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

export const LanguageProvider = ({children, consent, cookieLanguage}: { children: ReactNode, consent: RequestCookie | null, cookieLanguage: RequestCookie | null }) => {
    
    const initLangauge = cookieLanguage === null ? 'en' : cookieLanguage.value
    assertAvailibleLanguage(initLangauge)
    
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(consent === null || consent.value !== 'true' ? null : true)
    const [language, setLanguage] = useState<AvailibleLanguages>(initLangauge)
    
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