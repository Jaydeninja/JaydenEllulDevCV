import { motion } from 'framer-motion'

const Projects = ({ content }) => {
  return (
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
            <motion.article
              key={project.title}
              className="glass-effect rounded-3xl p-8 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -6 }}
            >
              <div className={`h-36 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6`} />

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <p className="text-gray-300 mb-2"><span className="text-gray-400">Contribution:</span> {project.contribution}</p>
              <p className="text-gray-300 mb-5"><span className="text-gray-400">Status:</span> {project.outcome}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                    Repository
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-secondary hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
