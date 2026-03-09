import { motion } from 'framer-motion'

const Experience = ({ content }) => {
  if (!content?.items?.length) return null

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {content.heading}
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {content.items.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}-${index}`}
              className="glass-effect rounded-3xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                <span className="text-sm text-gray-300">{item.period}</span>
              </div>
              <p className="text-primary mb-4">{item.company} • {item.location}</p>
              <ul className="space-y-2 text-gray-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>- {highlight}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

