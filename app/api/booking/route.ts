import { NextRequest, NextResponse } from "next/server"

const BOOKING_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwFVe2yiLUTfpVIH4Vewd8Gy7OOMDd3FIBZbaU2P49bY8_tyQY7KIDRMeQj2ZE-_Q57/exec"

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
