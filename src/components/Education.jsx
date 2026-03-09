import { motion } from 'framer-motion'

const Education = ({ content }) => {
  if (!content?.items?.length) return null

  return (
    <section id="education" className="py-20">
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
              key={`${item.institution}-${item.degree}-${index}`}
              className="glass-effect rounded-3xl p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="text-2xl font-semibold mb-1">{item.degree}</h3>
              <p className="text-primary mb-2">{item.institution}</p>
              <p className="text-gray-400 mb-2">{item.period}</p>
              <p className="text-gray-300">{item.notes}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
