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
  schoolProgram: "MSc AI Applied to Business",
  company: "Generali France",
  role: "Technicienne Actuariat (alternance)",
  department: "TechEx & Data — Global Corporate & Commercial",
  alternanceRythme: "4 jours/semaine en entreprise",
  photo: "/romane.jpg",         // ⚠️ À placer dans /public/
  chibi: "/chibi-romane.png",   // ⚠️ Générer sur grok.com puis placer dans /public/
  linkedin: "https://www.linkedin.com/in/romane-long-a19a33211",
  github: "https://github.com/romane13long-source",
  calendly: "",
  bookingUrl: "https://script.google.com/macros/s/AKfycbyl1yNubgVntoV6zxCHSUBfJYeWLUfO0uLhOay8xvkKjFLQvHZSmjkpTZAuV8Ip_8LW/exec",
  email: "Romane13.long@gmail.com",
  phone: "+33 7 81 61 81 82",
  tally: "[À_COMPLÉTER]",      // ⚠️ Créer sur tally.so
  cv: "/cv-romane-long.pdf",
}

// ============================================================
// PROJETS
// ⚠️ RAPPEL : écrire une description courte pour chaque projet
// ============================================================

export const projects = [
  {
    id: "mirakl",
    title: "Hackathon Mirakl × Eugenia",
    subtitle: "SaaS de recrutement IA — source, score et recommande des candidats",
    award: "1ère place — Use Case 3",
    description: "Lors d'un hackathon de 5 jours (Mirakl × OpenAI), j'ai participé au développement d'un SaaS de recrutement qui source, score et recommande automatiquement des candidats. Notre outil a identifié une candidate réellement en cours de recrutement chez Mirakl. Face à 85 étudiants, 1ère place et 10 000 € de crédits OpenAI.",
    tags: ["n8n", "OpenAI", "Supabase", "Streamlit", "Python"],
    github: "",
    demo: "https://talent-ai-sage.vercel.app",
    thumbnail: "/projects/mirakl-thumb.png",
    video: "", // vidéo Python scraping à fournir
    photos: [],
    highlight: true,
    date: "Avril 2026",
  },
  {
    id: "generali",
    title: "Automatisation Reporting Generali",
    subtitle: "Solution automatisée de reporting des sinistres millionnaires",
    award: "",
    description: "Solution automatisée de reporting des sinistres millionnaires basée sur Microsoft 365. Principe clé : séparation des rôles — Excel pour l'import, SharePoint comme base métier unique, Power Apps pour la saisie des commentaires conservés d'un mois sur l'autre. Architecture multi-utilisateur qui élimine les erreurs Excel et offre un reporting fiable, scalable et maintenable.",
    tags: ["Power Apps", "Power Automate", "SharePoint", "Excel"],
    github: "",
    demo: "",
    thumbnail: "/projects/generali-thumb.png",
    video: "",
    photos: [],
    highlight: false,
    date: "2025-2026",
  },
  {
    id: "uipath",
    title: "Robot UiPath — Vérification sinistres",
    subtitle: "Automatisation du contrôle des sinistres Apériteur sur portail BCR",
    award: "",
    description: "Robot UiPath qui automatise la vérification de l'ouverture des sinistres Apériteur sur le portail BCR, à partir d'un fichier CSV mensuel. Le robot lit chaque sinistre, navigue sur le portail pour déterminer son statut, puis consigne le résultat (OK/KO) dans un Excel généré depuis un template métier. Supprime un contrôle manuel répétitif et produit un livrable prêt pour validation.",
    tags: ["UiPath", "RPA", "Excel", "Automatisation"],
    github: "",
    demo: "",
    thumbnail: "/projects/uipath-thumb.png",
    video: "",
    photos: [],
    highlight: false,
    date: "2025-2026",
  },
  {
    id: "moodmatch",
    title: "Mood Match — Recommandation de films",
    subtitle: "Scraper 6500+ films/séries + recommandation par humeur",
    award: "",
    description: "Scraper Python qui a collecté plus de 6 500 films et séries depuis JustWatch. À partir de ces données : analyse statistique puis création de Mood Match, un site qui recommande le film ou la série parfaite selon l'humeur de l'utilisateur. Combine collecte de données à grande échelle, analyse et restitution web intuitive.",
    tags: ["Python", "Scraping", "Data Analysis", "Lovable"],
    github: "",
    demo: "https://vibe-select-recs.lovable.app",
    thumbnail: "/projects/moodmatch-thumb.png",
    video: "",
    photos: [],
    highlight: false,
    date: "2025",
  },
  {
    id: "rag",
    title: "Chatbot RAG — Paroles de chansons",
    subtitle: "Architecture RAG avec mémoire conversationnelle",
    award: "",
    description: "Chatbot intelligent basé sur une architecture RAG (Retrieval-Augmented Generation), alimenté par le scraping de paroles de chansons. Le chatbot répond uniquement sur ce périmètre et conserve en mémoire le contexte de la conversation au fil des échanges.",
    tags: ["Python", "RAG", "LangChain", "Embeddings"],
    github: "https://github.com/arquam-elglaoui/Project-AI",
    demo: "",
    thumbnail: "/projects/rag-thumb.png",
    video: "",
    photos: [],
    highlight: false,
    date: "2025",
  },
  {
    id: "together",
    title: "Together — App sorties entre amis",
    subtitle: "PWA mobile — géolocalisation, chat, gestion de groupes",
    award: "",
    description: "Application de sorties entre amis développée en vibe coding sur Cursor : géolocalisation, chat et gestion de groupes. Planificateur de sorties intelligent qui génère des suggestions personnalisées selon les envies de chacun.",
    tags: ["Next.js", "Supabase", "TypeScript", "Cursor"],
    github: "https://github.com/alexishonnorat/Together",
    demo: "",
    thumbnail: "/projects/together-thumb.png",
    video: "",
    photos: [],
    highlight: false,
    date: "2026",
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

export const timelineWork = [
  {
    date: "Juin 2025 → aujourd'hui",
    title: "Technicienne Actuariat",
    org: "Generali France",
    orgUrl: "https://www.generali.fr",
    type: "work" as const,
    description:
      "Analyse de la rentabilité des lignes de business et suivi des portefeuilles (tiering). Support aux équipes souscription, amélioration continue des données, automatisation de processus par l'IA.",
    logo: "/logos/generali.png",
  },
  {
    date: "Fév. 2024 → Août 2024",
    title: "Conseillère Back-Office",
    org: "Société Générale",
    orgUrl: "https://www.societegenerale.com",
    type: "work" as const,
    description:
      "Gestion et traitement des opérations back-office bancaire. Contrôle des flux, suivi des dossiers clients et coordination avec les équipes front.",
    logo: "/logos/sg.png",
  },
]

export const timelineEducation = [
  {
    date: "2025 → 2027",
    title: "MSc AI Applied to Business",
    org: "Eugenia School",
    orgUrl: "https://www.eugenia.school",
    type: "education" as const,
    description:
      "Formation hybride axée sur la pratique. Bootcamp intensif 8 semaines, projets concrets avec entreprises partenaires (Géniathons, Business Deep Dives), solutions IA & data pour problématiques business réelles.",
    logo: "/logos/eugenia.png",
  },
  {
    date: "Sept. 2020 → Juin 2024",
    title: "Licence Économie & Finance",
    org: "Aix-Marseille Université",
    orgUrl: "https://www.univ-amu.fr",
    type: "education" as const,
    description:
      "Analyse de données (R-Studio, SQL, économétrie, modélisation statistique). Finance et gestion, microéconomie & macroéconomie, évaluation des risques, marchés financiers.",
    logo: "/logos/amu.png",
  },
]

// ============================================================
// AGENTS IA
// ============================================================

export const agents = {
  STRAT: {
    name: "STRAT",
    role: "Manager",
    icon: "",
    color: "#14B8A6",
    description: "Je coordonne l'équipe et j'oriente vos questions.",
    keywords: [], // agent par défaut
  },
  DATA: {
    name: "DATA",
    role: "Talent Advisor",
    icon: "",
    color: "#06B6D4",
    description: "Je valorise le profil de Romane pour les recruteurs.",
    keywords: ["emploi", "recruteur", "cv", "compétence", "profil", "embauche", "poste", "stage", "alternance"],
  },
  SYNC: {
    name: "SYNC",
    role: "Agenda",
    icon: "",
    color: "#0EA5E9",
    description: "Je gère les prises de RDV et entretiens.",
    keywords: ["rendez-vous", "rdv", "entretien", "disponible", "agenda", "meeting", "rencontrer", "planifier", "booker"],
  },
  SPARK: {
    name: "SPARK",
    role: "Tech Lead",
    icon: "",
    color: "#38BDF8",
    description: "Je présente les projets et l'architecture technique.",
    keywords: ["projet", "code", "technique", "github", "stack", "architecture", "développement", "outil"],
  },
}
