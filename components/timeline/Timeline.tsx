"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { timelineWork, timelineEducation } from "@/src/lib/portfolio-data"
import { useLang } from "@/src/lib/language-context"

// ──────────────────────────────────────────────
// Carte d'événement
// ──────────────────────────────────────────────
type TimelineItem = (typeof timelineWork)[number] | (typeof timelineEducation)[number]

function TimelineCard({
  item,
  index,
  accent,
  lang,
}: {
  item: TimelineItem
  index: number
  accent: string
  lang: "fr" | "en"
}) {
  return (
    <motion.div
      className="relative flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      }}
    >
      {/* Point sur la ligne */}
      <div className="flex flex-col items-center" style={{ width: 20, flexShrink: 0 }}>
        <div
          className="mt-1 rounded-full"
          style={{
            width: 10,
            height: 10,
            background: accent,
            boxShadow: `0 0 8px ${accent}80`,
            flexShrink: 0,
          }}
        />
        {/* Trait vertical entre les points */}
        {index < 99 && (
          <div
            className="flex-1 mt-1"
            style={{ width: 1, background: `${accent}20`, minHeight: 16 }}
          />
        )}
      </div>

      {/* Contenu */}
      <div
        className="flex-1 mb-6 rounded-xl p-4 glass"
        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="text-[10px] font-medium tracking-[0.15em] uppercase mb-1"
          style={{ color: accent }}
        >
          {item.date}
        </p>
        <h3
          className="text-sm font-semibold leading-snug mb-0.5"
          style={{ color: "var(--text-1)" }}
        >
          {lang === "en" && "title_en" in item ? (item as {title_en?: string}).title_en || item.title : item.title}
        </h3>
        {item.orgUrl ? (
          <a
            href={item.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-opacity hover:opacity-100"
            style={{ color: "var(--text-3)", opacity: 0.8 }}
          >
            {item.org} ↗
          </a>
        ) : (
          <p className="text-xs" style={{ color: "var(--text-3)" }}>
            {item.org}
          </p>
        )}
        <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--text-3)" }}>
          {lang === "en" && "description_en" in item ? (item as {description_en?: string}).description_en || item.description : item.description}
        </p>
      </div>
    </motion.div>
  )
}

// ──────────────────────────────────────────────
// Colonne avec ligne animée au scroll
// ──────────────────────────────────────────────
function TimelineColumn({
  label,
  icon,
  items,
  accent,
  scrollRef,
  lang,
}: {
  label: string
  icon: string
  items: TimelineItem[]
  accent: string
  scrollRef: React.RefObject<HTMLElement | null>
  lang: "fr" | "en"
}) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 0.85", "end 0.15"],
  })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="flex-1 min-w-0">
      {/* En-tête colonne */}
      <motion.div
        className="flex items-center gap-2 mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
      >
        <span className="text-base">{icon}</span>
        <span
          className="text-xs font-semibold tracking-[0.18em] uppercase"
          style={{ color: accent }}
        >
          {label}
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }}
        />
      </motion.div>

      {/* Ligne teal + cartes */}
      <div className="relative pl-6">
        {/* Ligne verticale animée */}
        <div
          className="absolute left-2 top-0 bottom-0 overflow-hidden"
          style={{ width: 1 }}
        >
          <motion.div
            className="w-full h-full origin-top"
            style={{
              background: `linear-gradient(180deg, ${accent}, ${accent}30, transparent)`,
              scaleY: lineScaleY,
            }}
          />
        </div>

        {/* Événements */}
        {items.map((item, i) => (
          <TimelineCard key={i} item={item} index={i} accent={accent} lang={lang} />
        ))}
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────
// Section principale
// ──────────────────────────────────────────────
export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const { lang, t } = useLang()

  return (
    <section
      ref={sectionRef}
      id="parcours"
      className="relative overflow-hidden"
      style={{
        background: "var(--bg-deep)",
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
            {t("journey")}
          </p>
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--text-1)",
            }}
          >
            {t("journeyTitle")}
          </h2>
        </motion.div>

        {/* 2 colonnes desktop — colonne unique mobile */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <TimelineColumn
            label={t("journeyWork")}
            icon=""
            items={timelineWork}
            accent="#14B8A6"
            scrollRef={sectionRef}
            lang={lang}
          />

          {/* Séparateur vertical desktop */}
          <div
            className="hidden md:block w-px self-stretch"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(20,184,166,0.2), transparent)",
            }}
          />

          <TimelineColumn
            label={t("journeySchool")}
            icon=""
            items={timelineEducation}
            accent="#06B6D4"
            scrollRef={sectionRef}
            lang={lang}
          />
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
