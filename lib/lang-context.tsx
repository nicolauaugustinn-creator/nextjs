"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Lang, DEFAULT_LANG, t as translate, type TranslationKey } from "@/lib/i18n"

const STORAGE_KEY = "kn_lang"

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key) => key,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored && ["ru", "ro", "en", "ua"].includes(stored)) {
      setLangState(stored)
    } else {
      // If no language is stored, default to Russian and save it
      setLangState("ru")
      localStorage.setItem(STORAGE_KEY, "ru")
    }
  }, [])

  function setLang(newLang: Lang) {
    setLangState(newLang)
    localStorage.setItem(STORAGE_KEY, newLang)
  }

  function tFn(key: TranslationKey): string {
    return translate(lang, key)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: tFn }}>
      {children}
    </LangContext.Provider>
  )
}

export function useT() {
  return useContext(LangContext)
}
