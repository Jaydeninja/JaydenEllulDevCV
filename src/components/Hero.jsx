import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedSphere = ({ color }) => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2.1}>
      <MeshDistortMaterial color={color} attach="material" distort={0.32} speed={1.8} roughness={0.2} />
    </Sphere>
  )
}

const Hero = ({ content, sphereColor }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.18
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 1, 1]} intensity={1.1} />
          <AnimatedSphere color={sphereColor} />
        </Canvas>
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-6 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-primary text-xl font-semibold">{content.greeting}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-bold mb-6 text-gradient">
            {content.displayName}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl md:text-3xl mb-8 text-gray-200">
            {content.title}
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            {content.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href={content.primaryCta.href}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg text-gray-900"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(245, 158, 11, 0.45)' }}
              whileTap={{ scale: 0.95 }}
            >
              {content.primaryCta.label}
            </motion.a>

            <motion.a
              href={content.secondaryCta.href}
              className="px-8 py-4 glass-effect rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.secondaryCta.label}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
