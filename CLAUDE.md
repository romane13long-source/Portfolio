# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio data/AI de Romane Long — Next.js 15, TypeScript strict, Tailwind CSS, déployé sur Vercel.

## Commands

```bash
npm run dev      # dev server :3000
npm run build    # production build
npm run lint     # ESLint
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # fonts + analytics + cursor
│   ├── page.tsx            # assemblage des sections
│   └── api/chat/route.ts   # streaming chatbot (haiku uniquement)
├── components/
│   ├── layout/             # Navbar, Footer, CustomCursor
│   ├── hero/               # HeroSection, OrbitsAgents, ChibiAvatar
│   ├── projects/           # ProjectsGrid, ProjectCard
│   ├── skills/             # SkillsSection, SkillTag
│   ├── timeline/           # TimelineSection, TimelineItem
│   ├── chatbot/            # ChatWidget, ChatBubble, AgentBadge
│   └── contact/            # ContactSection, TallyEmbed
├── lib/
│   ├── portfolio-data.ts   # SOURCE UNIQUE — toutes les données de Romane
│   ├── agents.ts           # Config des 4 agents (ROMA, SCOUT, NEXUS, BRIDGE)
│   └── chatbot-system-prompt.ts  # Prompt anti-hallucination
└── styles/
    └── design-tokens.css   # Variables CSS du design system
```

## Design system (règles absolues)

**Couleurs** : `--bg-void: #020408`, `--teal: #14B8A6`, `--cyan: #06B6D4`
INTERDIT : violet, purple, magenta, rose

**Fonts** : Poppins (titres/corps), Source Serif 4 italic (accents)
INTERDIT : Inter, Arial, Roboto

**Glassmorphism** : `backdrop-filter: blur(12px)`, `bg: rgba(255,255,255,0.03)`
Bordures via `::before` pseudo-element avec gradient teal — JAMAIS de `border-color` direct

**Animations** : Framer Motion, stagger 0.1s, duration 0.5s, `cubic-bezier(0.4, 0, 0.2, 1)`

## Modèles IA — règle stricte

- Chatbot : `claude-haiku-4-5-20251001` UNIQUEMENT
- Max 300 tokens par réponse
- Max 20 messages history (slice last 20)
- Sonnet : uniquement si tâche complexe demandée explicitement
- Opus : JAMAIS

## Agents

| Agent | Rôle | Routing (mots-clés) |
|-------|------|---------------------|
| ROMA  | Manager — route vers les autres | défaut |
| SCOUT | Valorisation profil recruteurs | emploi, recruteur, CV, compétence |
| NEXUS | RDV et entretiens — Calendly | rendez-vous, entretien, disponible, agenda |
| BRIDGE | Projets et technique | projet, code, technique, GitHub |

Anti-hallucination : agents ne connaissent QUE `portfolio-data.ts`.
Si info manquante → renvoyer vers le lien contact.

## Source de vérité

`lib/portfolio-data.ts` est la SEULE source de données.
Ne jamais écrire de données en dur dans les composants — toujours importer depuis ce fichier.
