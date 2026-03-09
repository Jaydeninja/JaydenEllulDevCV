import { useEffect, useRef } from 'react'

const ParticlesBackground = ({ colors = ['#facc15', '#f59e0b'] }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()

    const particles = []
    const particleCount = 90

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.8
        this.speedX = Math.random() * 0.9 - 0.45
        this.speedY = Math.random() * 0.25 - 0.125
        this.opacity = Math.random() * 0.5 + 0.2
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width + 10) this.x = -10
        if (this.x < -10) this.x = canvas.width + 10
        if (this.y > canvas.height + 10) this.y = -10
        if (this.y < -10) this.y = canvas.height + 10
      }

      draw() {
        const hex = this.color.replace('#', '')
        const r = Number.parseInt(hex.substring(0, 2), 16)
        const g = Number.parseInt(hex.substring(2, 4), 16)
        const b = Number.parseInt(hex.substring(4, 6), 16)

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i += 1) {
      particles.push(new Particle())
    }

    let animationFrame
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x
          const dy = particle1.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.18 * (1 - distance / 120)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle1.x, particle1.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
          }
        })
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('resize', setSize)

    return () => {
      window.removeEventListener('resize', setSize)
      cancelAnimationFrame(animationFrame)
    }
  }, [colors])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.35 }} />
}

export default ParticlesBackground
