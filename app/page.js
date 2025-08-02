"use client"
import Header from "@/components/layout/Header"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Portfolio from "@/components/sections/Portfolio"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/layout/Footer"

export default function WeddingEventSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
