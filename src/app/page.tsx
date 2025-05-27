import Hero from '@/components/sections/Hero'
import AboutMe from '@/components/sections/AboutMe'
import TechStack from '@/components/sections/TechStack'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <TechStack />
    </main>
  )
}
