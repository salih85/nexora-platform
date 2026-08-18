import React from 'react'
import Hero from '../components/landing/Hero'
import FeaturedCourses from '../components/landing/FeaturedCourses'
import PopularCategories from '../components/landing/PopularCategories'
import HowItWorks from '../components/landing/HowItWorks'
import TopInstructors from '../components/landing/TopInstructors'
import DeveloperProjects from '../components/landing/DeveloperProjects'
import CommunityActivity from '../components/landing/CommunityActivity'
import Testimonials from '../components/landing/Testimonials'
import Statistics from '../components/landing/Statistics'
import Pricing from '../components/landing/Pricing'
import FAQ from '../components/landing/FAQ'
import FooterLanding from '../components/landing/FooterLanding'

export default function HomeLanding() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <FeaturedCourses />
        <PopularCategories />
        <HowItWorks />
        <TopInstructors />
        <DeveloperProjects />
        <CommunityActivity />
        <Testimonials />
        <Statistics />
        <Pricing />
        <FAQ />
      </main>

      <FooterLanding />
    </div>
  )
}
