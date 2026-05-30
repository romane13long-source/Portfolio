"use client"

import { createContext, useContext, useState } from "react"

export const translations = {
  fr: {
    projectsLabel: "Projets",
    projects: "Ce que j'ai construit",
    skills: "Compétences",
    journey: "Parcours",
    contact: "Contact",
    viewProject: "Voir le projet",
    bookMeeting: "Prendre RDV",
    available: "Disponible",
  },
  en: {
    projectsLabel: "Projects",
    projects: "What I've built",
    skills: "Skills",
    journey: "Journey",
    contact: "Contact",
    viewProject: "View project",
    bookMeeting: "Book a meeting",
    available: "Available",
  },
} as const

export type Lang = "fr" | "en"
export type TKey = keyof typeof translations.fr

const LanguageContext = createContext<{
  lang: Lang
  t: (key: TKey) => string
  toggle: () => void
}>({
  lang: "fr",
  t: (k) => translations.fr[k],
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr")
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"))
  const t = (key: TKey): string => translations[lang][key]
  return (
    <LanguageContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
