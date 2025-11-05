"use server"

import { type AvailibleLanguages } from "@/types/language"
import { cookies } from "next/headers"

export async function setConsentCookie() {
    const cookieStore = await cookies()
    cookieStore.set('consent', 'true', {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
    })
} 

export async function setLanguageCookie(newLang: AvailibleLanguages) {
    const cookieStore = await cookies()
    cookieStore.set('language', newLang, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
    })
} 