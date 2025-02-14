export type AvailibleLanguages = 'en' | 'sv'

const availibleLanguages = new Set<AvailibleLanguages>(['en', 'sv'])

export function assertAvailibleLanguage(lang: string): asserts lang is AvailibleLanguages {
    if (!availibleLanguages.has(lang as AvailibleLanguages)) {
        throw new TypeError(`Invalid language: ${lang}`)
    }
}