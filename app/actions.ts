"use server"

import { cookies } from "next/headers"

export async function setConsentCookie() {
    const cookieStore = await cookies()
    cookieStore.set('consent', 'true')
} 