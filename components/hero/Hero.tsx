"use client"

import { motion } from "framer-motion"
import { profile } from "@/src/lib/portfolio-data"
import { useLang } from "@/src/lib/language-context"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    delay,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
})

export default function Hero() {
  const { lang, t } = useLang()
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Vidéo plein écran */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.5)" }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay teal subtil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(20,184,166,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Texte + CTA — centré en bas */}
      <div className="absolute bottom-20 left-0 right-0 z-10 flex flex-col items-center text-center px-6 gap-3">
        <motion.p
          className="text-xs font-medium tracking-[0.2em] uppercase"
          style={{ color: "var(--teal)" }}
          {...fadeUp(0.1)}
        >
          {profile.school} · {profile.company}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl font-semibold leading-tight"
          style={{ color: "var(--text-1)" }}
          {...fadeUp(0.2)}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="text-sm italic"
          style={{
            fontFamily: "'Source Serif 4', serif",
            color: "rgba(255,255,255,0.65)",
          }}
          {...fadeUp(0.25)}
        >
          {t("heroWelcome")}
        </motion.p>

        <motion.p
          className="text-gradient text-lg md:text-xl font-medium"
          {...fadeUp(0.3)}
        >
          {profile.title}
        </motion.p>

        <motion.p
          className="text-sm md:text-base max-w-md leading-relaxed"
          style={{ color: "var(--text-2)" }}
          {...fadeUp(0.4)}
        >
          {lang === "en" ? profile.tagline_en : profile.tagline}
        </motion.p>

        {/* Boutons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
          {...fadeUp(0.5)}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-border flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105"
            style={{ color: "var(--text-1)" }}
          >
            <GitHubIcon /> GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105"
            style={{ background: "linear-gradient(135deg, #14B8A6, #06B6D4)", color: "#020408" }}
          >
            <LinkedInIcon /> LinkedIn
          </a>

          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-border flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105"
            style={{ color: "var(--teal)" }}
          >
            CV
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
        style={{ color: "var(--text-3)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-widest uppercase">{t("heroScroll")}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="animate-bounce">
          <path d="M8 3v10M8 13l-3-3M8 13l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
