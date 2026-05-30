# SKILLS.md — Ressources & Liens Portfolio Romane

## COMPOSANTS UI (gratuits, donner à Claude Code au bon moment)

### Magic UI — composants animés
- Orbit (agents) → https://magicui.design/docs/components/orbit
- Particles (fond) → https://magicui.design/docs/components/particles
- Animated text → https://magicui.design/docs/components/animated-gradient-text
- Blur fade → https://magicui.design/docs/components/blur-fade
- Globe → https://magicui.design/docs/components/globe
- Install : npx magicui-cli@latest add [nom]

### Aceternity UI — effets premium
- Card hover → https://ui.aceternity.com/components/card-hover-effect
- Sparkles → https://ui.aceternity.com/components/sparkles
- Hero parallax → https://ui.aceternity.com/components/hero-parallax
- Tracing beam → https://ui.aceternity.com/components/tracing-beam

### React Bits — animations texte
- Text animations → https://reactbits.dev/text-animations
- Backgrounds → https://reactbits.dev/backgrounds

### 21st.dev — composants communauté
- Browse → https://21st.dev/community/components

## DOCUMENTATION (une à la fois, au bon moment)

- Framer Motion → https://www.framer.com/motion/animation/
- React Three Fiber → https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
- Anthropic API → https://docs.anthropic.com/en/api/messages
- shadcn/ui → https://ui.shadcn.com/docs
- Tailwind CSS → https://tailwindcss.com/docs
- Next.js App Router → https://nextjs.org/docs/app

## OUTILS EXTERNES (Claude Code délègue vers ces outils)

| Besoin | Outil | URL | Temps |
|--------|-------|-----|-------|
| Avatar Chibi | Grok | grok.com | 5 min |
| Shader fond | ShaderGradient | shadergradient.co | 5 min |
| Scroll premium | MotionSites | motionsites.ai | 15 min |
| Avatar 3D réaliste | Avaturn | avaturn.me | 10 min |
| Avatar Ready Player Me | RPM | readyplayer.me | 10 min |
| Animations Mixamo | Mixamo | mixamo.com | 15 min |
| Compression 3D | gltfpack | github.com/zeux/meshoptimizer | 5 min |
| Formulaire contact | Tally | tally.so | 5 min |
| Lien RDV | Calendly | calendly.com | 5 min |
| Clé API Claude | Console | console.anthropic.com | 2 min |
| Déploiement | Vercel | vercel.com | 10 min |
| Fonts premium | Google Fonts | fonts.google.com | 2 min |

## GITHUB REPOS À CLONER (si besoin de code source)

```bash
# Magic UI source
git clone --depth=1 https://github.com/magicuidesign/magicui /tmp/magicui

# Aceternity UI
git clone --depth=1 https://github.com/aceternity/ui /tmp/aceternity

# UI UX Pro Max skill
git clone --depth=1 https://github.com/nextlevelbuilder/ui-ux-pro-max /tmp/ui-ux-pro-max

# Emil Kowalski — référence micro-interactions
# https://emilkowal.ski
```

## PROMPT CHIBI POUR GROK

```
3D chibi avatar of a young woman with long blonde hair,
wearing a blue denim jacket and white top, gold necklace with letter R,
smiling, Pixar style, transparent PNG background,
high quality 3D render, soft studio lighting, cute big eyes
```
→ Sauvegarder en PNG → mettre dans /public/chibi-romane.png

## PROMPT SHADER POUR SHADERGRADIENT

```
Sur shadergradient.co :
- Type : plane
- Couleurs : #020408 (fond) + #14B8A6 (teal) + #06B6D4 (cyan)
- Animation : lente, fluide
- Opacité : subtile
→ Copier le code React généré → donner à Claude Code
```

## RÈGLES D'UTILISATION

1. Ne jamais donner plus de 2 URLs à Claude Code en même temps
2. Donner l'URL uniquement au moment où il en a besoin
3. Les GitHub repos : cloner en /tmp/ (pas dans le projet)
4. Les composants Magic UI : installer via npx magicui-cli
5. Les composants Aceternity : copier le code directement dans /components/
