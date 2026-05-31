"use client"

import { createContext, useContext, useState } from "react"

export const translations = {
  fr: {
    // Nav
    projectsLabel: "Projets",
    projects: "Ce que j'ai construit",
    skills: "Compétences",
    journey: "Parcours",
    contact: "Contact",
    // Hero
    heroWelcome: "Bienvenue dans mon univers",
    heroScroll: "Défiler",
    heroTagline: "De la donnée brute aux décisions intelligentes — avec l'IA.",
    heroPitch: "Vous n'embauchez pas une personne. Vous embarquez une équipe.",
    // Projects
    viewProject: "Voir le projet",
    photos: "photo",
    // Skills
    stackTitle: "Mon stack",
    tier1Label: "Différenciantes",
    tier1Sub: "Mon avantage concurrentiel",
    tier2Label: "Solides",
    tier2Sub: "Maîtrise opérationnelle prouvée",
    tier3Label: "Opérationnelles",
    tier3Sub: "Utilisées quotidiennement",
    // Timeline
    journeyTitle: "Mon chemin",
    journeyWork: "Travail",
    journeySchool: "École",
    // Contact
    bookMeeting: "Prendre RDV",
    available: "Disponible",
    // Booking form
    bookingFormTitle: "Proposer un créneau",
    sendRequest: "Envoyer la demande",
    sending: "Envoi…",
    fillFields: "Veuillez remplir tous les champs.",
    bookingDone: "Demande envoyée. Romane reviendra vers toi rapidement.",
    bookingError: "Erreur — contacte Romane directement :",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "Email",
    datePlaceholder: "Date",
    timePlaceholder: "Heure",
    // Footer
    footerMade: "Fait avec IA, ambition et du café.",
  },
  en: {
    // Nav
    projectsLabel: "Projects",
    projects: "What I've built",
    skills: "Skills",
    journey: "Journey",
    contact: "Contact",
    // Hero
    heroWelcome: "Welcome to my universe",
    heroScroll: "Scroll",
    heroTagline: "From raw data to intelligent decisions — with AI.",
    heroPitch: "You're not hiring a person. You're bringing in a team.",
    // Projects
    viewProject: "View project",
    photos: "photo",
    // Skills
    stackTitle: "My stack",
    tier1Label: "Differentiating",
    tier1Sub: "My competitive advantage",
    tier2Label: "Strong",
    tier2Sub: "Proven operational mastery",
    tier3Label: "Operational",
    tier3Sub: "Used daily",
    // Timeline
    journeyTitle: "My journey",
    journeyWork: "Work",
    journeySchool: "School",
    // Contact
    bookMeeting: "Book a meeting",
    available: "Available",
    // Booking form
    bookingFormTitle: "Suggest a time slot",
    sendRequest: "Send request",
    sending: "Sending…",
    fillFields: "Please fill in all fields.",
    bookingDone: "Request sent. Romane will get back to you shortly.",
    bookingError: "Error — contact Romane directly:",
    namePlaceholder: "Your name",
    emailPlaceholder: "Email",
    datePlaceholder: "Date",
    timePlaceholder: "Time",
    // Footer
    footerMade: "Built with AI, ambition and coffee.",
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
