"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { profile } from "@/src/lib/portfolio-data"
import { useLang, TKey } from "@/src/lib/language-context"

const NAV_LINKS: { labelKey: TKey; href: string }[] = [
  { labelKey: "projectsLabel", href: "#projets"  },
  { labelKey: "skills",        href: "#skills"   },
  { labelKey: "journey",       href: "#parcours" },
  { labelKey: "contact",       href: "#contact"  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, t, toggle } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleAnchor = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(2,4,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(20,184,166,0.1)"
          : "1px solid transparent",
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1200, padding: "0 1.5rem", height: 60 }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-semibold tracking-wide transition-opacity hover:opacity-80"
          style={{ color: "var(--text-1)" }}
        >
          Romane<span style={{ color: "var(--teal)" }}>.</span>
        </button>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleAnchor(link.href)}
              className="text-xs font-medium tracking-wide transition-colors hover:opacity-100"
              style={{ color: "var(--text-2)" }}
            >
              {t(link.labelKey)}
            </button>
          ))}

          {/* Toggle langue */}
          <button
            onClick={toggle}
            className="text-xs font-medium px-3 py-1 rounded-full transition-all hover:opacity-100"
            style={{
              color: "var(--text-2)",
              border: "1px solid rgba(20,184,166,0.25)",
              background: "rgba(20,184,166,0.06)",
            }}
            aria-label="Changer la langue"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* CV */}
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #14B8A6, #06B6D4)",
              color: "#020408",
              fontWeight: 600,
            }}
          >
            CV ↗
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          style={{ minWidth: 44, minHeight: 44 }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === 1 && menuOpen ? 16 : 22,
                height: 2,
                background: "var(--teal)",
                opacity: i === 1 && menuOpen ? 0 : 1,
                transform:
                  menuOpen && i === 0
                    ? "translateY(6px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-6px) rotate(-45deg)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <motion.div
          className="md:hidden flex flex-col gap-1 px-6 pb-5 pt-2"
          style={{ background: "rgba(2,4,8,0.96)", borderTop: "1px solid rgba(20,184,166,0.1)" }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleAnchor(link.href)}
              className="text-left py-3 text-sm font-medium transition-colors"
              style={{ color: "var(--text-2)", minHeight: 44 }}
            >
              {t(link.labelKey)}
            </button>
          ))}

          {/* Toggle langue mobile */}
          <button
            onClick={toggle}
            className="text-left py-3 text-sm font-medium"
            style={{ color: "var(--teal)", minHeight: 44 }}
          >
            {lang === "fr" ? "Switch to EN" : "Passer en FR"}
          </button>

          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center py-2.5 rounded-full text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #14B8A6, #06B6D4)",
              color: "#020408",
            }}
          >
            CV ↗
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
