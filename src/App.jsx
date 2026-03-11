import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'
import Navigation from './components/Navigation'
import AnimatedCursor from './components/AnimatedCursor'
import { siteContent } from './data/siteContent'

function App() {
  return (
    <div className={`relative bg-gradient-to-br ${siteContent.theme.surfaceGradient} text-white`}>
      <AnimatedCursor />
      <ParticlesBackground colors={siteContent.theme.particleColors} />

      <Navigation content={siteContent.navigation} />

      <div className="relative z-10">
        <Hero content={siteContent.hero} sphereColor={siteContent.theme.heroSphereColor} />
        <About content={siteContent.about} />
        <Skills content={siteContent.skills} />
        <Experience content={siteContent.experience} />
        <Projects content={siteContent.projects} />
        <Education content={siteContent.education} />
        <Achievements content={siteContent.achievements} />
        <Contact content={siteContent.contact} />
      </div>

      <motion.footer
        className="relative z-10 py-8 text-center border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400">{`© ${new Date().getFullYear()} ${siteContent.footer.text}`}</p>
      </motion.footer>
    </div>
  )
}

export default App
