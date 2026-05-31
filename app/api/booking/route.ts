import { NextRequest, NextResponse } from "next/server"

const BOOKING_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbytnmZpgytK_h1EYRxYYFafghUKUffgf-gquOdeiuvyFWXtHHF29vmaDHoCBr-NxpTg/exec"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, date, time, duration, format, context } = body

    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 })
    }

    const params = new URLSearchParams({ name, email, date, time, duration, format, context })
    const res = await fetch(`${BOOKING_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
    })

    if (!res.ok) throw new Error(`Script error: ${res.status}`)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[booking/route]", err)
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 })
  }
}
