import type { Metadata } from "next"
import { Poppins, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "@/src/lib/language-context"
import "./globals.css"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Romane Long — Data & IA Applied to Business",
  description:
    "Portfolio de Romane Long — Technicienne Actuariat chez Generali, MSc IA Applied to Business à Eugenia School. Spécialisée en Prompt Engineering, Agents IA, automatisation et data analytics.",
  keywords: [
    "Romane Long", "Data", "IA", "Actuariat", "Generali", "Eugenia School",
    "Prompt Engineering", "Agents IA", "RAG", "Power Automate", "Alternance",
  ],
  authors: [{ name: "Romane Long" }],
  openGraph: {
    title: "Romane Long — Data & IA Applied to Business",
    description: "De la donnée brute aux décisions intelligentes — avec l'IA.",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/romane.jpg", width: 1200, height: 630, alt: "Romane Long" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romane Long — Data & IA Applied to Business",
    description: "De la donnée brute aux décisions intelligentes — avec l'IA.",
    images: ["/romane.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020408] overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
