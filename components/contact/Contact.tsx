"use client"

import { motion } from "framer-motion"
import { profile } from "@/src/lib/portfolio-data"
import { useLang } from "@/src/lib/language-context"

// Hardcodé pour éviter hydration mismatch (Math.random() interdit SSR)
const PARTICLES = [
  { id: 0,  top: "12%", left: "8%",  size: 3, delay: 0,   dur: 8  },
  { id: 1,  top: "78%", left: "15%", size: 2, delay: 1.2, dur: 10 },
  { id: 2,  top: "35%", left: "90%", size: 4, delay: 0.5, dur: 7  },
  { id: 3,  top: "65%", left: "85%", size: 2, delay: 2,   dur: 9  },
  { id: 4,  top: "20%", left: "50%", size: 3, delay: 0.8, dur: 11 },
  { id: 5,  top: "88%", left: "60%", size: 2, delay: 1.5, dur: 8  },
  { id: 6,  top: "50%", left: "25%", size: 2, delay: 3,   dur: 12 },
  { id: 7,  top: "5%",  left: "70%", size: 3, delay: 0.3, dur: 9  },
  { id: 8,  top: "92%", left: "40%", size: 2, delay: 2.5, dur: 7  },
  { id: 9,  top: "45%", left: "75%", size: 4, delay: 1,   dur: 10 },
  { id: 10, top: "70%", left: "5%",  size: 2, delay: 1.8, dur: 8  },
  { id: 11, top: "25%", left: "35%", size: 3, delay: 0.6, dur: 11 },
]

export default function Contact() {
  const { t } = useLang()
  const rdvHref = profile.bookingUrl || `mailto:${profile.email}`
  const rdvIsExternal = !!profile.bookingUrl

  const [line1, line2] = profile.pitch.split(". ")

  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "var(--bg-void)",
        padding: "clamp(5rem, 12vh, 10rem) 1.5rem",
      }}
    >
      {/* Séparateur haut */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(20,184,166,0.3), transparent)",
        }}
      />

      {/* Glow central */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 65%, rgba(20,184,166,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Particules flottantes */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: "#14B8A6",
            opacity: 0.3,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-8">
        {/* Badge disponibilité */}
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
          style={{
            background: "rgba(20,184,166,0.10)",
            color: "#2DD4BF",
            border: "1px solid rgba(20,184,166,0.3)",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#14B8A6", flexShrink: 0 }}
          />
          {t("available")}
        </motion.span>

        {/* Tagline */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-1"
            style={{ color: "var(--teal)" }}
          >
            {t("contact")}
          </p>
          <h2
            className="font-semibold leading-tight"
            style={{
              fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
              color: "var(--text-1)",
            }}
          >
            {line1}.
          </h2>
          <p
            className="italic leading-snug"
            style={{
              fontSize: "clamp(1.2rem, 2.8vw, 2rem)",
              color: "var(--text-2)",
              fontFamily: "'Source Serif 4', serif",
            }}
          >
            {line2}.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium glass transition-transform hover:scale-105"
            style={{ color: "var(--text-1)", border: "1px solid var(--glass-border)" }}
          >
            <span className="text-[11px] font-bold" style={{ color: "var(--teal)" }}>
              in
            </span>
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium glass transition-transform hover:scale-105"
            style={{ color: "var(--text-1)", border: "1px solid var(--glass-border)" }}
          >
            <span style={{ color: "var(--teal)" }}>{"{ }"}</span>
            GitHub
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium glass transition-transform hover:scale-105"
            style={{ color: "var(--text-1)", border: "1px solid var(--glass-border)" }}
          >
            <span style={{ color: "var(--teal)" }}>@</span>
            Email
          </a>

          <a
            href={rdvHref}
            target={rdvIsExternal ? "_blank" : undefined}
            rel={rdvIsExternal ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #14B8A6, #06B6D4)",
              color: "#020408",
              fontWeight: 600,
              boxShadow: "0 4px 20px rgba(20,184,166,0.3)",
            }}
          >
            {t("bookMeeting")}
          </a>
        </motion.div>

        {/* Email discret */}
        <motion.p
          className="text-xs"
          style={{ color: "var(--text-3)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {profile.email}
        </motion.p>
      </div>
    </section>
  )
}
