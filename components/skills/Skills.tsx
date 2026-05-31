"use client"

import { motion } from "framer-motion"
import { useLang } from "@/src/lib/language-context"

// ──────────────────────────────────────────────
// 3 tiers de compétences
// ──────────────────────────────────────────────
const TIERS = [
  {
    id: 1,
    labelKey: "tier1Label" as const,
    subtitleKey: "tier1Sub" as const,
    skills: [
      "Prompt Engineering",
      "Agents IA",
      "Automatisation",
      "RAG",
      "Pricing assurantiel",
      "Modélisation statistique",
    ],
    tag: {
      bg: "rgba(20,184,166,0.13)",
      color: "#2DD4BF",
      border: "rgba(20,184,166,0.55)",
      shadowIdle: "0 0 10px rgba(20,184,166,0.28)",
      shadowHover: "0 0 22px rgba(20,184,166,0.65), 0 4px 14px rgba(20,184,166,0.3)",
    },
  },
  {
    id: 2,
    labelKey: "tier2Label" as const,
    subtitleKey: "tier2Sub" as const,
    skills: [
      "Python", "SQL", "Power BI", "Tableau",
      "n8n", "Make.com", "OpenAI API",
    ],
    tag: {
      bg: "rgba(20,184,166,0.06)",
      color: "#14B8A6",
      border: "rgba(20,184,166,0.28)",
      shadowIdle: "none",
      shadowHover: "0 0 14px rgba(20,184,166,0.3), 0 4px 8px rgba(20,184,166,0.15)",
    },
  },
  {
    id: 3,
    labelKey: "tier3Label" as const,
    subtitleKey: "tier3Sub" as const,
    skills: [
      "Excel/VBA", "Power Apps", "Power Automate",
      "UiPath", "SharePoint", "Airtable", "R-Studio",
    ],
    tag: {
      bg: "rgba(255,255,255,0.03)",
      color: "rgba(255,255,255,0.55)",
      border: "rgba(255,255,255,0.10)",
      shadowIdle: "none",
      shadowHover: "0 2px 10px rgba(20,184,166,0.15)",
    },
  },
]

type TagStyle = (typeof TIERS)[0]["tag"]

function SkillTag({
  skill,
  tag,
  delay,
}: {
  skill: string
  tag: TagStyle
  delay: number
}) {
  return (
    <motion.span
      className="px-3.5 py-1.5 rounded-full text-sm font-medium cursor-default select-none"
      style={{
        background: tag.bg,
        color: tag.color,
        border: `1px solid ${tag.border}`,
        boxShadow: tag.shadowIdle,
      }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }}
      whileHover={{
        scale: 1.07,
        y: -2,
        boxShadow: tag.shadowHover,
        transition: { duration: 0.2 },
      }}
    >
      {skill}
    </motion.span>
  )
}

export default function Skills() {
  const { t } = useLang()
  return (
    <section
      id="skills"
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-void)",
        padding: "clamp(4rem, 10vh, 8rem) 1.5rem",
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

      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
          }}
        >
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--teal)" }}
          >
            {t("skills")}
          </p>
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--text-1)",
            }}
          >
            {t("stackTitle")}
          </h2>
        </motion.div>

        {/* Tiers */}
        <div className="flex flex-col gap-10">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
              }}
            >
              {/* Tier header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-widest uppercase"
                  style={{
                    background:
                      tier.id === 1
                        ? "rgba(20,184,166,0.18)"
                        : "rgba(255,255,255,0.04)",
                    color: tier.id === 1 ? "#2DD4BF" : "var(--text-3)",
                    border: `1px solid ${
                      tier.id === 1
                        ? "rgba(20,184,166,0.4)"
                        : "rgba(255,255,255,0.08)"
                    }`,
                  }}
                >
                  Tier {tier.id}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-1)" }}
                >
                  {t(tier.labelKey)}
                </span>
                <span
                  className="text-xs hidden sm:inline"
                  style={{ color: "var(--text-3)" }}
                >
                  — {t(tier.subtitleKey)}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5">
                {tier.skills.map((skill, i) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    tag={tier.tag}
                    delay={i * 0.06}
                  />
                ))}
              </div>

              {/* Divider (sauf dernier tier) */}
              {tier.id < TIERS.length && (
                <div
                  className="mt-10 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(20,184,166,0.15), transparent 60%)",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Séparateur bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(20,184,166,0.3), transparent)",
        }}
      />
    </section>
  )
}
