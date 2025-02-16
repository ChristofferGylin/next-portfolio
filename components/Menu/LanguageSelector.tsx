import ImageButton from "../UI/ImageButton"
import sweFlag from "@/public/flags/se.svg"
import ukFlag from "@/public/flags/gb.svg"
import { useLanguageContext } from "@/contexts/Language"
import { AvailibleLanguages } from "@/types/language"
import { setLanguageCookie } from "@/app/actions"
import Indicator from "../UI/Indicator"

const LanguageSelector = () => {

    const { cookieConsent, language, languageSetter } = useLanguageContext()

    const languageIndicatorPosition = language === 'en' ? 'translate-x-[34px]' : ''

    const onSetLanguage = (newLang: AvailibleLanguages) => {
        languageSetter(newLang)
        
        if (cookieConsent) {
            setLanguageCookie(newLang)
        }
    }

    return (
        <div className="flex flex-col items-center gap-0.5">
            <div className="flex justify-between w-[54px] h-[20px]">
                <ImageButton src={sweFlag} alt='Change language to Swedish' callback={() => {onSetLanguage('sv')}} />
                <p className="flex justify-center items-center">/</p>
                <ImageButton src={ukFlag} alt='Change language to English' callback={() => {onSetLanguage('en')}} />
            </div>
            <div className={`flex w-[60px]`}>
                <Indicator width="w-[26px]" style={languageIndicatorPosition} />
            </div>
        </div>
    )
}

export default LanguageSelector