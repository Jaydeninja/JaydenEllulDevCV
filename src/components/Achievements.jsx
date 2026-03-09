import { motion } from 'framer-motion'

const Achievements = ({ content }) => {
  if (!content?.items?.length) return null

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {content.heading}
        </motion.h2>

        <div className="max-w-4xl mx-auto grid gap-6">
          {content.items.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.year}-${index}`}
              className="glass-effect rounded-3xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <span className="text-gray-400">{item.year}</span>
              </div>
              <p className="text-gray-300">{item.context}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

