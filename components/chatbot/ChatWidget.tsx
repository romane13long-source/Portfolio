"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { agents, profile } from "@/src/lib/portfolio-data"
import { useLang } from "@/src/lib/language-context"

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────
type AgentKey = keyof typeof agents
type Message = {
  role: "user" | "bot"
  content: string
  agent?: AgentKey
}

// ──────────────────────────────────────────────
// Constantes
// ──────────────────────────────────────────────
const SUGGESTIONS = [
  "Qui est Romane ?",
  "Ses compétences data & IA",
  "Le projet Mirakl",
  "Prendre un RDV",
]

const BOOKING_KEYWORDS = [
  "rdv", "rendez-vous", "rendez vous", "meeting", "call",
  "visio", "entretien", "planifier", "booker", "créneau", "agenda",
]

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────
function stripAccents(s: string) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function detectAgent(text: string): AgentKey {
  const lower = stripAccents(text.toLowerCase())
  for (const [key, agent] of Object.entries(agents)) {
    if ((agent.keywords as string[]).some((kw) => lower.includes(stripAccents(kw)))) {
      return key as AgentKey
    }
  }
  return "STRAT"
}

function isBookingRequest(text: string): boolean {
  const lower = stripAccents(text.toLowerCase())
  return BOOKING_KEYWORDS.some((kw) => lower.includes(kw))
}

// ──────────────────────────────────────────────
// Typewriter hook
// ──────────────────────────────────────────────
function useTypewriter(text: string, active: boolean, speed = 18) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    if (!active) { setDisplayed(text); return }
    setDisplayed("")
    let i = 0
    const CHUNK = 3
    const timer = setInterval(() => {
      i = Math.min(i + CHUNK, text.length)
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [text, active, speed])

  return displayed
}

// ──────────────────────────────────────────────
// Agent badge — sans emoji
// ──────────────────────────────────────────────
function AgentBadge({ agentKey }: { agentKey: AgentKey }) {
  const agent = agents[agentKey]
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium"
      style={{
        background: `${agent.color}18`,
        color: agent.color,
        border: `1px solid ${agent.color}35`,
      }}
    >
      {agent.name}
    </span>
  )
}

// ──────────────────────────────────────────────
// Message bubble
// ──────────────────────────────────────────────
function BotBubble({ msg, isLast }: { msg: Message; isLast: boolean }) {
  const displayed = useTypewriter(msg.content, isLast)
  return (
    <div className="flex flex-col gap-1 items-start max-w-[85%]">
      {msg.agent && <AgentBadge agentKey={msg.agent} />}
      <div
        className="glass px-3.5 py-2.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed"
        style={{ color: "var(--text-1)", border: "1px solid var(--glass-border)" }}
      >
        {displayed}
        {isLast && displayed.length < msg.content.length && (
          <span className="inline-block w-1 h-3.5 ml-0.5 bg-teal animate-pulse align-middle"
            style={{ background: "var(--teal)" }} />
        )}
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────
// Booking CTA — poste vers /api/booking
// ──────────────────────────────────────────────
function BookingCTA({ onClose }: { onClose: () => void }) {
  const { t } = useLang()
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error" | "invalid">("idle")
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", duration: "30", format: "Google Meet" })

  async function submit() {
    if (!form.name || !form.email || !form.date || !form.time) { setStatus("invalid"); return }
    setStatus("sending")
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, context: "Demande issue du chatbot portfolio." }),
      })
      if (!res.ok) throw new Error("server error")
      setStatus("done")
    } catch {
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <div className="mt-2 p-3 rounded-xl text-xs" style={{ background: "rgba(20,184,166,0.1)", color: "var(--teal)", border: "1px solid rgba(20,184,166,0.25)" }}>
        {t("bookingDone")}
      </div>
    )
  }

  return (
    <div className="mt-2 p-3 rounded-xl flex flex-col gap-2" style={{ background: "var(--bg-card)", border: "1px solid var(--glass-border)" }}>
      <p className="text-[11px] font-medium" style={{ color: "var(--teal)" }}>{t("bookingFormTitle")}</p>
      {(["name", "email", "date", "time"] as const).map((field) => (
        <input
          key={field}
          type={field === "email" ? "email" : field === "date" ? "date" : field === "time" ? "time" : "text"}
          placeholder={field === "name" ? t("namePlaceholder") : field === "email" ? t("emailPlaceholder") : field === "date" ? t("datePlaceholder") : t("timePlaceholder")}
          value={form[field]}
          onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
          className="w-full rounded-lg px-3 py-1.5 text-xs outline-none"
          style={{ background: "var(--glass-strong)", color: "var(--text-1)", border: "1px solid var(--glass-border)" }}
        />
      ))}
      <select
        value={form.format}
        onChange={(e) => setForm((f) => ({ ...f, format: e.target.value }))}
        className="w-full rounded-lg px-3 py-1.5 text-xs outline-none"
        style={{ background: "var(--glass-strong)", color: "var(--text-1)", border: "1px solid var(--glass-border)" }}
      >
        <option>Google Meet</option>
        <option>Téléphone</option>
        <option>Présentiel</option>
      </select>
      <select
        value={form.duration}
        onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
        className="w-full rounded-lg px-3 py-1.5 text-xs outline-none"
        style={{ background: "var(--glass-strong)", color: "var(--text-1)", border: "1px solid var(--glass-border)" }}
      >
        <option value="30">30 min</option>
        <option value="45">45 min</option>
        <option value="60">60 min</option>
      </select>
      <button
        onClick={submit}
        disabled={status === "sending"}
        className="rounded-lg py-1.5 text-xs font-medium transition-transform hover:scale-[1.02] disabled:opacity-50"
        style={{ background: "linear-gradient(135deg, #14B8A6, #06B6D4)", color: "#020408" }}
      >
        {status === "sending" ? t("sending") : t("sendRequest")}
      </button>
      {status === "invalid" && (
        <p className="text-[10px] text-center" style={{ color: "#F87171" }}>
          {t("fillFields")}
        </p>
      )}
      {status === "error" && (
        <p className="text-[10px] text-center" style={{ color: "#F87171" }}>
          {t("bookingError")} {profile.email}
        </p>
      )}
    </div>
  )
}

// ──────────────────────────────────────────────
// Icône message SVG (remplace 💬)
// ──────────────────────────────────────────────
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#020408" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

// ──────────────────────────────────────────────
// Widget principal
// ──────────────────────────────────────────────
export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [activeAgent, setActiveAgent] = useState<AgentKey>("STRAT")
  const [showBooking, setShowBooking] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  useEffect(() => {
    function handleOpenBooking() { setOpen(true); setTimeout(() => setShowBooking(true), 300) }
    window.addEventListener("open-booking", handleOpenBooking)
    return () => window.removeEventListener("open-booking", handleOpenBooking)
  }, [])

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim().slice(0, 600)
    if (!trimmed || loading) return

    setInput("")
    setShowSuggestions(false)
    setShowBooking(false)

    const agent = detectAgent(trimmed)
    setActiveAgent(agent)

    const userMsg: Message = { role: "user", content: trimmed }
    const history = [...messages, userMsg]
    setMessages(history)
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({
            role: m.role === "bot" ? "assistant" : "user",
            content: m.content,
          })),
        }),
      })

      const data = await res.json()
      const botText: string = data.text ?? data.error ?? "Une erreur s'est produite."

      setMessages((prev) => [...prev, { role: "bot", content: botText, agent }])

      if (isBookingRequest(trimmed)) {
        setTimeout(() => setShowBooking(true), 800)
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Erreur de connexion. Réessaie dans quelques secondes.", agent: "STRAT" },
      ])
    } finally {
      setLoading(false)
    }
  }, [loading, messages])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input) }
  }

  const lastBotIndex = [...messages].reverse().findIndex((m) => m.role === "bot")
  const lastBotActualIndex = lastBotIndex === -1 ? -1 : messages.length - 1 - lastBotIndex

  return (
    <>
      {/* Bouton flottant — icône SVG, pas emoji */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform"
        style={{
          background: "linear-gradient(135deg, #14B8A6, #06B6D4)",
          boxShadow: "0 0 24px rgba(20,184,166,0.4)",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }}
              className="text-[#020408] text-lg font-bold leading-none">
              ✕
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }}>
              <ChatIcon />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel chatbot */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] max-h-[520px] rounded-2xl flex flex-col overflow-hidden"
            style={{
              background: "rgba(6,13,18,0.96)",
              border: "1px solid var(--glass-border)",
              backdropFilter: "blur(24px)",
              boxShadow: "0 0 40px rgba(20,184,166,0.12), 0 24px 48px rgba(0,0,0,0.6)",
            }}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid var(--glass-border)" }}>
              <div className="flex items-center gap-2.5">
                {/* Avatar — initiale de l'agent */}
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #14B8A6, #06B6D4)", color: "#020408" }}>
                  {agents[activeAgent].name.slice(0, 2)}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "var(--text-1)" }}>
                    {agents[activeAgent].name}
                    <span className="ml-1.5 font-normal" style={{ color: "var(--text-3)" }}>· {agents[activeAgent].role}</span>
                  </p>
                  <p className="text-[10px]" style={{ color: "var(--teal)" }}>Assistant portfolio de Romane</p>
                </div>
              </div>
              <div className="w-2 h-2 rounded-full" style={{ background: "#14B8A6", boxShadow: "0 0 6px #14B8A6" }} />
            </div>

            {/* Messages */}
            <div ref={messagesRef} className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3" style={{ minHeight: 0 }}>

              {/* Message d'accueil */}
              {messages.length === 0 && (
                <div className="flex flex-col gap-1 items-start max-w-[85%]">
                  <AgentBadge agentKey="STRAT" />
                  <div className="glass px-3.5 py-2.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed"
                    style={{ color: "var(--text-1)", border: "1px solid var(--glass-border)" }}>
                    Bonjour. Je suis STRAT, l&apos;assistant de Romane Long. Posez-moi vos questions sur son profil, ses projets ou pour prendre rendez-vous.
                  </div>
                </div>
              )}

              {messages.map((msg, i) =>
                msg.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <div className="px-3.5 py-2.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed max-w-[85%]"
                      style={{ background: "linear-gradient(135deg, rgba(20,184,166,0.2), rgba(6,182,212,0.15))", color: "var(--text-1)", border: "1px solid rgba(20,184,166,0.25)" }}>
                      {msg.content}
                    </div>
                  </div>
                ) : (
                  <BotBubble key={i} msg={msg} isLast={i === lastBotActualIndex} />
                )
              )}

              {/* Typing indicator */}
              {loading && (
                <div className="flex items-center gap-1.5 px-3.5 py-3 glass rounded-2xl rounded-tl-sm w-fit" style={{ border: "1px solid var(--glass-border)" }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--teal)", animation: `agent-pulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                  ))}
                </div>
              )}

              {/* Booking form */}
              {showBooking && !loading && <BookingCTA onClose={() => setShowBooking(false)} />}
            </div>

            {/* Suggestions */}
            {showSuggestions && messages.length === 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium transition-transform hover:scale-105"
                    style={{ background: "rgba(20,184,166,0.08)", color: "rgba(20,184,166,0.85)", border: "1px solid rgba(20,184,166,0.2)" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 pb-3" style={{ borderTop: "1px solid var(--glass-border)", paddingTop: "10px" }}>
              <div className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "var(--glass-strong)", border: "1px solid var(--glass-border)" }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Posez votre question…"
                  maxLength={600}
                  disabled={loading}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-40"
                  style={{ color: "var(--text-1)" }}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={loading || !input.trim()}
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30 hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #14B8A6, #06B6D4)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="#020408" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
