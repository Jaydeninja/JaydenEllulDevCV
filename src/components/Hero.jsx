import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

const AnimatedSphere = ({ color, mouse }) => {
  const meshRef = useRef()

  useFrame(() => {
    if (!meshRef.current) return

    const mx = mouse.current[0]
    const my = mouse.current[1]
    const intensity = Math.min(1.6, Math.hypot(mx, my))

    const targetRotY = mx * 2.3
    const targetRotX = -my * 1.7

    // Stronger mouse-follow rotation
    meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.09
    meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.09

    // Cursor-driven squish/stretch (kept subtle enough to stay professional)
    const baseScale = 2.1
    const stretchX = baseScale + Math.abs(mx) * 0.45 + intensity * 0.12
    const stretchY = baseScale + Math.abs(my) * 0.45 + intensity * 0.12
    const squishZ = baseScale - intensity * 0.25

    meshRef.current.scale.x += (stretchX - meshRef.current.scale.x) * 0.08
    meshRef.current.scale.y += (stretchY - meshRef.current.scale.y) * 0.08
    meshRef.current.scale.z += (squishZ - meshRef.current.scale.z) * 0.08
  })

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2.1}>
      <MeshDistortMaterial color={color} attach="material" distort={0.36} speed={2.2} roughness={0.2} />
    </Sphere>
  )
}

const Hero = ({ content, sphereColor }) => {
  const mouse = useRef([0, 0])

  const handleMouseMove = (e) => {
    mouse.current = [
      (e.clientX / window.innerWidth - 0.5) * 2,
      (e.clientY / window.innerHeight - 0.5) * 2
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.18 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 1, 1]} intensity={1.1} />
          <AnimatedSphere color={sphereColor} mouse={mouse} />
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

          <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-bold mb-6 text-gradient leading-none pb-3">
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
