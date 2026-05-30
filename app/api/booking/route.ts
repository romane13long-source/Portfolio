import { NextRequest, NextResponse } from "next/server"
import { profile } from "@/src/lib/portfolio-data"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    await fetch(profile.bookingUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[booking/route]", error)
    return NextResponse.json({ error: "Erreur envoi" }, { status: 500 })
  }
}
