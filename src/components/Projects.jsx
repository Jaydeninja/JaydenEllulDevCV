import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import iracingBanner from '../../public/images/JaysIracingToolboxPNG.png'

// Map project titles to imported banner images
const PROJECT_IMAGES = {
  JaysIRacingToolbox: iracingBanner,
}

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const TiltCard = ({ children, className }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springCfg = { stiffness: 220, damping: 22 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springCfg)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springCfg)
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100])
  const glowBg = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(250,204,21,0.14) 0%, transparent 60%)`
  )

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      {/* Specular highlight follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl z-10"
        style={{ background: glowBg }}
      />
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)
  const bannerSrc = PROJECT_IMAGES[project.title]



  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
      style={{ perspective: 900 }}
    >
      <TiltCard className="group h-full">
        <article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="h-full glass-effect rounded-3xl overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20"
        >
          {/* Banner */}
          <div className="relative h-48 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a00 0%, #2d1000 50%, #1a0800 100%)' }}>
            {bannerSrc ? (
              <img
                src={bannerSrc}
                alt={project.title}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
            )}

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-black/65 flex items-center justify-center"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.22 }}
            >
              <span className="text-white font-semibold text-lg tracking-widest uppercase">
                View Project
              </span>
            </motion.div>

            {/* Status badge */}
            <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 border border-primary/40 text-primary backdrop-blur-sm">
              {project.outcome}
            </span>
          </div>

          {/* Body */}
          <div className="p-7">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
            <p className="text-gray-400 text-sm mb-5">
              <span className="text-gray-500">Contribution: </span>
              {project.contribution}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium text-primary"
                  initial={{ opacity: 0, scale: 0.75 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.06 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(250,204,21,0.22)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-5 text-sm border-t border-white/10 pt-4">
              {project.repoUrl && (
                <motion.a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-primary hover:text-yellow-300 font-medium transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <GitHubIcon />
                  Repository
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-secondary hover:text-amber-300 font-medium transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <ExternalIcon />
                  Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  )
}

const Projects = ({ content }) => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-5xl md:text-6xl font-bold mb-16 text-center text-gradient"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {content.heading}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {content.items.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
)

export default Projects
