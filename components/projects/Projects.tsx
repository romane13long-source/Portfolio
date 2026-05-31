"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { projects } from "@/src/lib/portfolio-data"
import { useLang } from "@/src/lib/language-context"

// ──────────────────────────────────────────────
// Gradients placeholder par projet
// ──────────────────────────────────────────────
const GRADIENTS: Record<string, { bg: string; accent: string }> = {
  mirakl:    { bg: "#0A1F1D", accent: "#14B8A6" },
  together:  { bg: "#0A1525", accent: "#06B6D4" },
  rag:       { bg: "#0A1A20", accent: "#14B8A6" },
  generali:  { bg: "#0A1320", accent: "#0EA5E9" },
  uipath:    { bg: "#0A1525", accent: "#06B6D4" },
  moodmatch: { bg: "#0A1520", accent: "#14B8A6" },
}

function ThumbnailPlaceholder({ id }: { id: string }) {
  const g = GRADIENTS[id] ?? GRADIENTS.rag
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${g.bg} 0%, #020408 100%)` }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${g.accent}22 1px, transparent 1px),
                            linear-gradient(90deg, ${g.accent}22 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${g.accent}25 0%, transparent 70%)`,
            border: `1px solid ${g.accent}30`,
            opacity: 0.55,
          }}
        />
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────
// Lightbox photos hackathon
// ──────────────────────────────────────────────
function Lightbox({ photos, onClose }: { photos: string[]; onClose: () => void }) {
  const [idx, setIdx] = useState(0)
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        style={{ background: "rgba(2,4,8,0.92)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full"
          style={{ maxWidth: 800 }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative w-full rounded-xl overflow-hidden"
            style={{ aspectRatio: "16/9", border: "1px solid rgba(20,184,166,0.25)" }}
          >
            <Image
              src={photos[idx]}
              alt={`Photo événement ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {photos.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => setIdx((i) => (i - 1 + photos.length) % photos.length)}
                className="glass px-4 py-2 rounded-full text-sm transition-transform hover:scale-105"
                style={{ color: "var(--teal)", border: "1px solid rgba(20,184,166,0.25)" }}
              >
                ←
              </button>
              <span className="text-xs" style={{ color: "var(--text-3)" }}>
                {idx + 1} / {photos.length}
              </span>
              <button
                onClick={() => setIdx((i) => (i + 1) % photos.length)}
                className="glass px-4 py-2 rounded-full text-sm transition-transform hover:scale-105"
                style={{ color: "var(--teal)", border: "1px solid rgba(20,184,166,0.25)" }}
              >
                →
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 w-8 h-8 rounded-full glass flex items-center
                       justify-center text-sm transition-transform hover:scale-110"
            style={{ color: "var(--text-2)", border: "1px solid var(--glass-border)" }}
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ──────────────────────────────────────────────
// Carte projet
// ──────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const { t } = useLang()
  const cardRef = useRef<HTMLDivElement>(null)
  const [imgError, setImgError] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  const hasRealImage =
    !!project.thumbnail &&
    !project.thumbnail.includes("À_COMPLÉTER") &&
    !imgError
  const hasPhotos = project.photos.length > 0
  const hasGithub = project.github && !project.github.startsWith("[À_COMPLÉTER")
  const hasDemo = project.demo && !project.demo.startsWith("[À_COMPLÉTER")
  const description = project.description.startsWith("[À_COMPLÉTER")
    ? null
    : project.description

  return (
    <>
      <motion.div
        ref={cardRef}
        role="article"
        className="relative rounded-2xl overflow-hidden flex flex-col group"
        style={{ background: "var(--bg-card)", minHeight: 320 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            "0 0 0 1px rgba(20,184,166,0.4), 0 24px 48px rgba(20,184,166,0.14)",
          transition: { duration: 0.3 },
        }}
      >
        {/* ── Zone image ── */}
        <div className="relative w-full overflow-hidden" style={{ height: 200, flexShrink: 0 }}>
          <ThumbnailPlaceholder id={project.id} />

          {hasRealImage && (
            <motion.div className="absolute inset-0" style={{ y: imageY }}>
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImgError(true)}
              />
            </motion.div>
          )}

          {/* Overlay hover — cliquable si lien disponible */}
          {(hasDemo || hasGithub) && (
            <a
              href={(hasDemo ? project.demo : project.github) as string}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "rgba(2,4,8,0.55)" }}
            >
              <span
                className="text-sm font-medium tracking-wide"
                style={{ color: "var(--teal-bright, #2DD4BF)" }}
              >
                {t("viewProject")} →
              </span>
            </a>
          )}

          {/* Badge award — sans emoji */}
          {project.award && (
            <div
              className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1
                          rounded-full text-[11px] font-medium"
              style={{
                background: "rgba(20,184,166,0.18)",
                color: "#14B8A6",
                border: "1px solid rgba(20,184,166,0.35)",
              }}
            >
              {project.award}
            </div>
          )}

          {/* Bouton photos — sans emoji */}
          {hasPhotos && (
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5
                         rounded-full text-[11px] font-medium glass
                         transition-transform hover:scale-105"
              style={{ color: "var(--text-1)", border: "1px solid var(--glass-border)" }}
            >
              {project.photos.length} photo{project.photos.length > 1 ? "s" : ""}
            </button>
          )}
        </div>

        {/* ── Contenu ── */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <div>
            <p
              className="text-[11px] font-medium tracking-[0.15em] uppercase mb-1"
              style={{ color: "var(--teal)" }}
            >
              {project.date}
            </p>
            <h3
              className="text-base font-semibold leading-snug"
              style={{ color: "var(--text-1)" }}
            >
              {project.title}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-2)" }}>
              {project.subtitle}
            </p>
          </div>

          {description && (
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-3)" }}>
              {description}
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.tags
              .filter((t) => !t.includes("À_COMPLÉTER"))
              .map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-medium
                             transition-transform hover:scale-105 cursor-default"
                  style={{
                    background: "rgba(20,184,166,0.08)",
                    color: "rgba(20,184,166,0.85)",
                    border: "1px solid rgba(20,184,166,0.18)",
                  }}
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* CTA — min-height 44px pour mobile */}
          {(hasGithub || hasDemo) && (
            <div className="flex gap-2 pt-1">
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 rounded-full text-xs
                             font-medium glass transition-transform hover:scale-105"
                  style={{
                    color: "var(--text-1)",
                    border: "1px solid var(--glass-border)",
                    minHeight: 44,
                  }}
                >
                  GitHub →
                </a>
              )}
              {hasDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 rounded-full text-xs
                             font-medium transition-transform hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #14B8A6, #06B6D4)",
                    color: "#020408",
                    minHeight: 44,
                  }}
                >
                  Demo →
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {lightboxOpen && hasPhotos && (
        <Lightbox photos={project.photos} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  )
}

// ──────────────────────────────────────────────
// Section principale
// ──────────────────────────────────────────────
export default function Projects() {
  const { t } = useLang()

  return (
    <section
      id="projets"
      className="relative bg-[#060D12] overflow-hidden"
      style={{ padding: "clamp(4rem,10vh,8rem) 1.5rem" }}
    >
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
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--teal)" }}
          >
            {t("projectsLabel")}
          </p>
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--text-1)",
            }}
          >
            {t("projects")}
          </h2>
        </motion.div>

        {/* Grille — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={project.id} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>

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
