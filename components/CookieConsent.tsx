"use client"

import { useLanguageContext } from "@/contexts/Language"

const texts = {
    en: {
        paragraph: 'This web site uses cookies',
        accept: 'I consent to using cookies',
        decline: 'I do not consent to using cookies'
    },
    sv: {
        paragraph: 'Den här webbplatsen använder cookies',
        accept: 'Jag samtycker till användde av cookies',
        decline: 'Jag samtycker inte till användde av cookies'
    }
}

const CookieConsent = () => {
    
    const { cookieConsent, language } = useLanguageContext()

    if (cookieConsent !== null) {
        return <></>
    }

    const content = language === 'en' ? texts.en : texts.sv

    const onAccept = () => {
        // do stuff
    }
    
    const onDecline = () => {
        // do other stuff
    }
    return (
        <div className="self-end flex flex-col gap-2 justify-center align-center w-full h-fit p-8 m-2 rounded-xl border border-slate-300">
            <p className="text-center text-lg">
                {content.paragraph}
            </p>
            <div className="flex gap-2 justify-center align-center">
                <button onClick={onDecline}>
                    {content.decline}
                </button>
                <button onClick={onAccept}>
                    {content.accept}
                </button>
            </div>
        </div>
    )
}

export default CookieConsent