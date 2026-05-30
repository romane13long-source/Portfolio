"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
]

export default function EasterEgg() {
  const [visible, setVisible] = useState(false)
  const [seq, setSeq] = useState<string[]>([])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      setSeq((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length)
        if (next.join(",") === KONAMI.join(",")) {
          setVisible(true)
        }
        return next
      })
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center px-6"
          style={{ background: "rgba(2,4,8,0.92)", backdropFilter: "blur(12px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setVisible(false)}
        >
          <motion.div
            className="relative max-w-md w-full rounded-2xl p-8 text-center"
            style={{
              background: "rgba(20,184,166,0.06)",
              border: "1px solid rgba(20,184,166,0.35)",
            }}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--teal)" }}
            >
              Easter egg débloqué
            </p>
            <p
              className="text-2xl font-semibold leading-snug mb-3"
              style={{ color: "var(--text-1)" }}
            >
              Tu as trouvé le code Konami.
            </p>
            <p
              className="italic text-base leading-relaxed"
              style={{
                fontFamily: "'Source Serif 4', serif",
                color: "rgba(255,255,255,0.65)",
              }}
            >
              La vraie IA, c&apos;est la curiosité.
            </p>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setVisible(false)}
                className="px-6 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #14B8A6, #06B6D4)",
                  color: "#020408",
                }}
              >
                Fermer
              </button>
            </div>

            {/* Ligne décorative */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #14B8A6, transparent)" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
