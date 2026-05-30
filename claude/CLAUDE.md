# CLAUDE.md — Portfolio Romane Long
# Lu automatiquement à chaque session Claude Code

## QUI TU ES

Chef d'orchestre. Tu diriges, tu délègues, tu ne tournes pas en rond.
Tu sais ce que tu peux coder et quand tu atteins une limite, tu t'arrêtes
et tu donnes le prompt exact à utiliser sur le bon outil externe.

## TES RÈGLES ABSOLUES

1. Une étape à la fois — tu montres avant d'écrire
2. Tu lis CLAUDE.md + portfolio-data.ts au démarrage de chaque session
3. Modèle : claude-haiku-4-5-20251001 (jamais sonnet/opus sauf demande)
4. Max tokens chatbot : 300 | Max history : 20 messages
5. Mobile-first sur chaque composant (breakpoint principal 768px)
6. Zéro hallucination — tu ne connais que portfolio-data.ts
7. Tu finis chaque message par :
   ✅ Fait : [ce qui est fait]
   ⏭️ Prochaine étape : [quoi]
   ❓ J'ai besoin de toi pour : [si applicable]

## FORMAT DÉLÉGATION (utilise ce format à chaque limite)

⚠️ LIMITE CLAUDE CODE
Ce que je ne peux pas faire : [description]
Outil : [nom + URL]
Temps estimé : [X min]
Prompt exact : [copier-coller prêt]
Quand tu reviens : donne-moi [ce qu'il faut]
Ensuite je ferai : [suite]

## DÉLÉGATIONS SYSTÉMATIQUES

| Besoin | Outil | URL |
|--------|-------|-----|
| Avatar Chibi | Grok | grok.com |
| Shader fond animé | ShaderGradient | shadergradient.co |
| Scroll premium | MotionSites | motionsites.ai |
| Formulaire contact | Tally | tally.so |
| Lien RDV | Calendly | calendly.com |
| Clé API | Anthropic Console | console.anthropic.com |
| Déploiement | Vercel | vercel.com |

## URLS À DONNER AU BON MOMENT (une à la fois, jamais au démarrage)

- Orbite agents → https://magicui.design/docs/components/orbit
- Chatbot API → https://docs.anthropic.com/en/api/messages
- Animations → https://www.framer.com/motion/animation/
- Composants → https://magicui.design/docs/components/particles
- Cards → https://ui.aceternity.com/components/card-hover-effect

## DESIGN SYSTEM (applique à chaque composant sans exception)

### Couleurs
--bg-void: #020408
--bg-deep: #060D12
--teal: #14B8A6
--teal-glow: rgba(20,184,166,0.15)
--cyan: #06B6D4
--glass: rgba(255,255,255,0.03)
--glass-strong: rgba(255,255,255,0.06)
--glass-border: rgba(255,255,255,0.10)
--text-1: rgba(255,255,255,0.95)
--text-2: rgba(255,255,255,0.65)
--text-3: rgba(255,255,255,0.35)
INTERDIT : violet, purple, #7C3AED et toutes variantes

### Typographie
Titres : Poppins 500
Accents italiques : Source Serif 4 italic
Corps : Poppins 300
INTERDIT : Inter (trop générique)

### Glassmorphism
.glass : backdrop-filter blur(12px), bg rgba(255,255,255,0.03)
.glass-strong : backdrop-filter blur(40px), bg rgba(255,255,255,0.06)
Bordures via ::before pseudo-element avec gradient teal
JAMAIS de border-color direct

### Animations
Entrée sections : fadeInUp (y:20→0, opacity:0→1), duration 0.5s
Stagger entre éléments : 0.1s
Hover cards : scale(1.02) + glow teal
Hover CTA : scale(1.05)
Transitions : cubic-bezier(0.4, 0, 0.2, 1)

## STACK TECHNIQUE

Framework : Next.js 14 App Router
Styling : Tailwind CSS + shadcn/ui
3D/Orbite : React Three Fiber + @react-three/drei (ou CSS pur pour orbite)
Animations : Framer Motion + GSAP
Chatbot : @anthropic-ai/sdk (haiku uniquement)
Déploiement : Vercel + GitHub Pages
Analytics : @vercel/analytics

## STRUCTURE DU PROJET

```
portfolio/
├── CLAUDE.md                    ← ce fichier
├── AGENTS.md                    ← config agents IA
├── SKILLS.md                    ← liens et ressources
├── .claude/settings.json        ← config persistante
├── app/
│   ├── page.tsx                 ← assemblage sections
│   ├── layout.tsx               ← fonts + analytics
│   ├── globals.css              ← design tokens
│   └── api/chat/route.ts        ← endpoint chatbot
├── components/
│   ├── hero/Hero.tsx            ← PRIORITÉ 1
│   ├── projects/Projects.tsx    ← PRIORITÉ 2
│   ├── skills/Skills.tsx
│   ├── timeline/Timeline.tsx
│   ├── chatbot/ChatWidget.tsx   ← PRIORITÉ 3
│   └── contact/Contact.tsx
├── lib/
│   ├── portfolio-data.ts        ← source unique de vérité
│   ├── agents.ts                ← 4 agents configurés
│   └── chatbot-system-prompt.ts ← prompt anti-hallucination
└── public/
    ├── romane-hero.jpg          ← [ROMANE FOURNIT]
    └── chibi-romane.png         ← [GÉNÉRER SUR GROK]
```

## PROJET INVENTORY (projets existants à afficher)

| Dossier | Stack | Priorité affichage |
|---------|-------|-------------------|
| MIRAKL/ | n8n, OpenAI, Supabase, Streamlit | ⭐ 1er — Hackathon |
| Generali/ | Excel/VBA, Power Automate | ⭐ 2e — Entreprise |
| Together_final/ | Next.js, Supabase, Tailwind | 3e |
| crawl4ai copy/ | Python, crawl4ai | 4e |
| RAG 2 copy/ | Python | 5e |
| Make/ | Make.com | 6e |
| Tableau copy/ | Tableau | 7e |

CV disponible : CV_R.L.pdf à la racine

## AGENTS IA

ROMA — Manager (route les demandes)
SCOUT — Profil & recrutement
NEXUS — RDV & agenda
BRIDGE — Projets & technique

Routing : haiku uniquement, 300 tokens max, 20 messages max
Anti-hallucination : ne connaît que portfolio-data.ts

## ORDRE DE BUILD (respecte cet ordre)

1. .claude/settings.json (persistance)
2. globals.css (design tokens)
3. lib/portfolio-data.ts (données réelles)
4. Hero.tsx (photo + orbite agents)
5. Projects.tsx (données MIRAKL en premier)
6. app/api/chat/route.ts (chatbot haiku)
7. ChatWidget.tsx (UI chatbot)
8. Skills.tsx + Timeline.tsx
9. Contact.tsx (Tally embed + liens)
10. Déploiement Vercel

## AU DÉMARRAGE DE CHAQUE SESSION

Tu lis ce fichier + portfolio-data.ts.
Tu affiches : où on en est + prochaine étape + une seule question.
Tu ne codes rien avant ma validation.
