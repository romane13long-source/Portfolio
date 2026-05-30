// ============================================================
// SOURCE UNIQUE DE VÉRITÉ — Toutes les données de Romane Long
// Les agents IA ne lisent QUE ce fichier.
// ============================================================

export const profile = {
  name: "Romane Long",
  title: "Data & IA Applied to Business",
  tagline: "De la donnée brute aux décisions intelligentes — avec l'IA.",
  pitch: "Vous n'embauchez pas une personne. Vous embarquez une équipe.",
  location: "Paris, Île-de-France",
  school: "Eugenia School",
  schoolProgram: "MSc IA Applied to Business",
  company: "Generali France",
  role: "Technicienne Actuariat (alternance)",
  department: "TechEx & Data — Global Corporate & Commercial",
  photo: "/romane.jpg",         // ⚠️ À placer dans /public/
  chibi: "/chibi-romane.png",   // ⚠️ Générer sur grok.com puis placer dans /public/
  linkedin: "https://www.linkedin.com/in/romane-long-a19a33211",
  github: "https://github.com/romane13long-source",
  calendly: "[À_COMPLÉTER]",   // ⚠️ Créer sur calendly.com
  email: "[À_COMPLÉTER]",
  tally: "[À_COMPLÉTER]",      // ⚠️ Créer sur tally.so
  cv: "/CV_R.L.pdf",
}

// ============================================================
// PROJETS
// ⚠️ RAPPEL : écrire une description courte pour chaque projet
// ============================================================

export const projects = [
  {
    id: "mirakl",
    title: "Hackathon Mirakl × Eugenia",
    subtitle: "🏆 1ère place UC3 — AI Talent Sourcing System",
    award: "1ère place — Use Case 3",
    // ⚠️ RAPPEL : écrire une description de 2-3 phrases sur ce projet
    description: "[À_COMPLÉTER — ex: Système agentique de sourcing de candidats et veille concurrentielle pour l'équipe Talent Acquisition de Mirakl. Développé en 4 jours lors du hackathon Eugenia × Mirakl.]",
    tags: ["n8n", "OpenAI", "Supabase", "Streamlit", "Python", "Dust"],
    github: "[À_COMPLÉTER]",
    demo: "[À_COMPLÉTER]",
    // ⚠️ Photo hackathon fournie — à copier dans /public/projects/mirakl-event-1.jpg
    thumbnail: "/projects/mirakl-thumb.png",
    photos: [
      "/projects/mirakl-event-1.jpg", // photo groupe devant logo Mirakl (fournie)
    ],
    highlight: true,
    date: "Avril 2026",
    logo: "/logos/mirakl.png", // ⚠️ logo à placer ou laisser vide
  },
  {
    id: "together",
    title: "Together",
    subtitle: "PWA mobile — sorties de groupe & assistant IA",
    // ⚠️ RAPPEL : écrire une description de 2-3 phrases sur ce projet
    description: "[À_COMPLÉTER — ex: Application mobile-first pour organiser des sorties en groupe. Chat en temps réel, recommandations IA via OpenRouter, authentification Supabase.]",
    tags: ["Next.js 16", "Supabase", "TypeScript", "OpenRouter", "Tailwind CSS 4"],
    github: "[À_COMPLÉTER]",
    demo: "[À_COMPLÉTER]",
    thumbnail: "/projects/together-thumb.png",
    photos: [],
    highlight: true,
    date: "2026",
    logo: "",
  },
  {
    id: "rag",
    title: "Système RAG",
    subtitle: "Retrieval-Augmented Generation — Python",
    // ⚠️ RAPPEL : écrire une description de 2-3 phrases sur ce projet
    description: "[À_COMPLÉTER]",
    tags: ["Python", "LangChain", "Embeddings", "Vector DB", "[À_COMPLÉTER]"],
    github: "[À_COMPLÉTER]",
    demo: "",
    thumbnail: "/projects/rag-thumb.png",
    photos: [],
    highlight: false,
    date: "2025-2026",
    logo: "",
  },
  {
    id: "generali",
    title: "Automation Data — Generali",
    subtitle: "Dashboards & automatisation processus actuariat",
    // ⚠️ RAPPEL : écrire une description de 2-3 phrases sur ce projet
    // ⚠️ Pour le logo/thumbnail : utiliser le logo Generali officiel ou fournir un screenshot
    description: "[À_COMPLÉTER — ex: Développement d'outils de monitoring (dashboards, analyses), amélioration de la qualité des données et automatisation de processus pour le suivi de rentabilité et de portefeuille.]",
    tags: ["Power Automate", "Power Apps", "SharePoint", "Excel/VBA", "Power BI"],
    github: "",  // projet confidentiel
    demo: "",
    thumbnail: "/projects/generali-thumb.png", // ⚠️ fournir screenshot ou logo
    photos: [],
    highlight: false,
    date: "Juin 2025 → aujourd'hui",
    logo: "/logos/generali.png", // ⚠️ à placer
  },
]

// ============================================================
// COMPÉTENCES
// ============================================================

export type SkillTier = "expert" | "avancé" | "maîtrise"

export const skills: { category: string; tier: SkillTier; items: string[] }[] = [
  {
    category: "Data & Analytics",
    tier: "expert",
    items: ["Excel/VBA", "SQL", "Power BI", "Tableau", "R-Studio", "Économétrie"],
  },
  {
    category: "Automation & No-Code",
    tier: "avancé",
    items: ["Power Automate", "Power Apps", "n8n", "Make.com", "Zapier", "SharePoint"],
  },
  {
    category: "IA & LLM",
    tier: "avancé",
    items: [
      "Prompt Engineering",
      "RAG",
      "IA Agentique",
      "OpenAI API",
      "Anthropic API",
      "Dust",
      "OpenRouter",
    ],
  },
  {
    category: "Développement",
    tier: "maîtrise",
    items: ["Python", "TypeScript", "Next.js", "Supabase", "LangChain"],
  },
  {
    category: "Finance & Actuariat",
    tier: "expert",
    items: [
      "Pricing assurantiel",
      "Analyse de rentabilité",
      "Segmentation portefeuille",
      "Réassurance reporting",
      "Modélisation statistique",
    ],
  },
]

// ============================================================
// PARCOURS (du plus récent au plus ancien)
// ============================================================

export const timeline = [
  {
    date: "Juin 2025 → aujourd'hui",
    title: "Technicienne Actuariat",
    org: "Generali France",
    orgUrl: "https://www.generali.fr",
    type: "work" as const,
    description:
      "Analyse de la rentabilité des lignes de business et suivi des portefeuilles (tiering). Support aux équipes souscription, amélioration continue des données, automatisation de processus par l'IA.",
    logo: "/logos/generali.png", // ⚠️ à placer
  },
  {
    date: "2025 → aujourd'hui",
    title: "MSc IA Applied to Business",
    org: "Eugenia School",
    orgUrl: "https://www.eugenia.school",
    type: "education" as const,
    description:
      "Formation hybride axée sur la pratique. Bootcamp intensif 8 semaines, projets concrets avec entreprises partenaires (Géniathons, Business Deep Dives), solutions IA & data pour problématiques business réelles.",
    logo: "/logos/eugenia.png", // ⚠️ à placer
  },
  {
    date: "Avril 2026",
    title: "🏆 Hackathon Mirakl × Eugenia — 1ère place UC3",
    org: "Mirakl",
    orgUrl: "https://www.mirakl.com",
    type: "award" as const,
    description:
      "Système agentique de sourcing de candidats et veille concurrentielle pour Talent Acquisition. 1ère place sur l'Use Case 3 parmi toutes les équipes Eugenia.",
    logo: "/logos/mirakl.png", // ⚠️ à placer
  },
  {
    date: "Sept. 2020 → Juin 2024",
    title: "Licence Économie & Finance",
    org: "Aix-Marseille Université",
    orgUrl: "https://www.univ-amu.fr",
    type: "education" as const,
    description:
      "Analyse de données (R-Studio, SQL, économétrie, modélisation statistique). Finance et gestion, microéconomie & macroéconomie, évaluation des risques, marchés financiers.",
    logo: "/logos/amu.png", // ⚠️ à placer ou laisser vide
  },
]

// ============================================================
// AGENTS IA
// ============================================================

export const agents = {
  ROMA: {
    name: "ROMA",
    role: "Manager",
    icon: "⚡",
    color: "#14B8A6",
    description: "Je coordonne l'équipe et j'oriente vos questions.",
    keywords: [], // agent par défaut
  },
  SCOUT: {
    name: "SCOUT",
    role: "Talent Advisor",
    icon: "🎯",
    color: "#06B6D4",
    description: "Je valorise le profil de Romane pour les recruteurs.",
    keywords: ["emploi", "recruteur", "cv", "compétence", "profil", "embauche", "poste", "stage", "alternance"],
  },
  NEXUS: {
    name: "NEXUS",
    role: "Agenda",
    icon: "📅",
    color: "#0EA5E9",
    description: "Je gère les prises de RDV et entretiens.",
    keywords: ["rendez-vous", "rdv", "entretien", "disponible", "agenda", "calendly", "meeting", "rencontrer"],
  },
  BRIDGE: {
    name: "BRIDGE",
    role: "Tech Lead",
    icon: "🔧",
    color: "#38BDF8",
    description: "Je présente les projets et l'architecture technique.",
    keywords: ["projet", "code", "technique", "github", "stack", "architecture", "développement", "outil"],
  },
}
