import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/hero/Hero"
import Projects from "@/components/projects/Projects"
import Skills from "@/components/skills/Skills"
import Timeline from "@/components/timeline/Timeline"
import Contact from "@/components/contact/Contact"
import ChatWidget from "@/components/chatbot/ChatWidget"
import EasterEgg from "@/components/layout/EasterEgg"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-[#020408]">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Projets */}
        <section id="projets">
          <Projects />
        </section>

        {/* 3. Skills */}
        <Skills />

        {/* 4. Parcours */}
        <Timeline />

        {/* 5. Contact */}
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <EasterEgg />
    </>
  )
}
