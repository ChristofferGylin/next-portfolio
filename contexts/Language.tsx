import { createContext, useState } from "react";
import { type ReactNode } from "react";

type LanguageContextType = {
    cookieConsent: boolean | null;
    language: 'en' | 'se'
}

export const LanguageContext = createContext<LanguageContextType | null>(null) 

const Context = ({children}: { children: ReactNode}) => {
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

export default Context