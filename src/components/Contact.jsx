import { motion } from 'framer-motion'

const Contact = ({ content }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
            {content.heading}
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            {content.subheading}
          </p>

          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.a
                href={`mailto:${content.email}`}
                className="flex flex-col items-center gap-3 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white group-hover:text-primary transition-colors">
                  {content.email}
                </p>
              </motion.a>

              {content.showPhone && (
                <motion.a
                  href={`tel:${content.phone.replace(/\s+/g, '')}`}
                  className="flex flex-col items-center gap-3 group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white group-hover:text-primary transition-colors">
                    {content.phone}
                  </p>
                </motion.a>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              {content.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-white/20 hover:border-primary/60 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-sm text-gray-300 mr-2">{link.label}</span>
                  <span className="text-white">{link.handle}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.a
            href={`mailto:${content.email}`}
            className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg text-gray-900"
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(250, 204, 21, 0.45)' }}
            whileTap={{ scale: 0.96 }}
          >
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
