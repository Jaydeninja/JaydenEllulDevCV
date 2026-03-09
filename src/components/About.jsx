import { motion } from 'framer-motion'

const About = ({ content }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-gradient">{content.heading}</h2>

          <div className="glass-effect rounded-3xl p-8 md:p-12">
            {content.paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            <div className="grid md:grid-cols-3 gap-4 mt-8 mb-8">
              <div className="rounded-xl border border-white/15 p-4">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">{content.quickFacts.location}</p>
              </div>
              <div className="rounded-xl border border-white/15 p-4">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="text-white">{content.quickFacts.yearsExperience}</p>
              </div>
              <div className="rounded-xl border border-white/15 p-4">
                <p className="text-sm text-gray-400">Work Authorization</p>
                <p className="text-white">{content.quickFacts.workAuthorization}</p>
              </div>
            </div>

            <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Target Roles</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {content.targetRoles.map((role) => (
                <span key={role} className="px-4 py-2 bg-white/5 border border-white/15 rounded-full text-sm text-gray-100">
                  {role}
                </span>
              ))}
            </div>

            <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">Core Stack</p>
            <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              {content.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-primary/25 to-secondary/25 border border-primary/30 rounded-full text-sm text-white"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
