
"use client"

import Link from "next/link"
import Navigation from "../components/Navigation"
import HomeSection from "../components/HomeSection"
import TechnologiesSection from "../components/TechnologiesSection"
import FeaturedProjectsSection from "../components/FeaturedProjectsSection"
import ExperienceSection from "../components/ExperienceSection"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <div className="font-inter bg-[#0a0a0a] text-[#e5e5e5] min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6">
        <HomeSection />
        <TechnologiesSection />
        <FeaturedProjectsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  )
}

