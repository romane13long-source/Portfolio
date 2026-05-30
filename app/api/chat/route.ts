import Anthropic from "@anthropic-ai/sdk"
import { NextRequest, NextResponse } from "next/server"
import { buildSystemPrompt } from "@/src/lib/chatbot-system-prompt"

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// Guards extraits de ancien/chat.js — isRoleInjection()
const INJECTION_PATTERNS = [
  "ignore tes", "oublie tes", "change de role", "change de rôle",
  "system prompt", "nouvelle instruction", "desormais tu", "désormais tu",
  "fais semblant", "oublie tout", "tu es maintenant",
  "ignore previous", "you are now", "act as", "pretend to be", "pretend you are",
  "from now on", "jailbreak", "dan mode", "override instructions",
  "new persona", "disregard your", "you are a",
]

function isInjection(text: string): boolean {
  const normalized = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
  return INJECTION_PATTERNS.some((p) =>
    normalized.includes(p.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
  )
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const messages: { role: "user" | "assistant"; content: string }[] =
      body.messages ?? []

    if (!messages.length) {
      return NextResponse.json({ error: "No messages" }, { status: 400 })
    }

    // Garde anti-injection sur le dernier message utilisateur
    const lastContent = String(messages.at(-1)?.content ?? "")
    if (isInjection(lastContent)) {
      return NextResponse.json({
        text: "Je suis uniquement ici pour parler de Romane et de son parcours.",
      })
    }

    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: buildSystemPrompt(),
      messages: messages.slice(-20), // max 20 messages d'historique
    })

    const text =
      response.content[0].type === "text" ? response.content[0].text : ""

    return NextResponse.json({ text })
  } catch (err) {
    console.error("[chat/route]", err)
    return NextResponse.json(
      { error: "Erreur serveur. Réessaie dans quelques secondes." },
      { status: 500 }
    )
  }
}
