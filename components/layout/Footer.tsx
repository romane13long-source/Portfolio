"use client"

import { profile } from "@/src/lib/portfolio-data"
import { useLang } from "@/src/lib/language-context"

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-5"
      style={{
        background: "var(--bg-void)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <p className="text-xs" style={{ color: "var(--text-3)" }}>
        {profile.name} © {year}
      </p>

      <div className="flex items-center gap-4">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-opacity hover:opacity-100"
          style={{ color: "var(--text-3)" }}
        >
          LinkedIn
        </a>
        <span style={{ color: "var(--text-3)", opacity: 0.3 }}>·</span>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-opacity hover:opacity-100"
          style={{ color: "var(--text-3)" }}
        >
          GitHub
        </a>
        <span style={{ color: "var(--text-3)", opacity: 0.3 }}>·</span>
        <a
          href={`mailto:${profile.email}`}
          className="text-xs transition-opacity hover:opacity-100"
          style={{ color: "var(--text-3)" }}
        >
          Email
        </a>
      </div>

      <p className="text-[10px]" style={{ color: "var(--text-3)", opacity: 0.5 }}>
        {t("footerMade")}
      </p>
    </footer>
  )
}
