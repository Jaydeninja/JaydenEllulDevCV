import { useEffect, useRef } from 'react'

// OPTION 4 - Glowing Orbs / Aurora
// Soft glowing orbs drifting around, elegant and modern
const AuroraBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let animationFrame
    let tick = 0

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()

    const orbs = [
      { x: 0.2, y: 0.3, r: 0.22, color: [239, 68, 68], speed: 0.0003, phase: 0 },
      { x: 0.75, y: 0.6, r: 0.28, color: [220, 38, 38], speed: 0.0004, phase: 1.2 },
      { x: 0.5, y: 0.8, r: 0.18, color: [250, 204, 21], speed: 0.0005, phase: 2.4 },
      { x: 0.85, y: 0.2, r: 0.16, color: [245, 158, 11], speed: 0.0003, phase: 3.6 },
      { x: 0.1, y: 0.75, r: 0.14, color: [239, 68, 68], speed: 0.0006, phase: 0.8 },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick++

      orbs.forEach(orb => {
        const cx = (orb.x + Math.sin(tick * orb.speed + orb.phase) * 0.08) * canvas.width
        const cy = (orb.y + Math.cos(tick * orb.speed * 1.3 + orb.phase) * 0.06) * canvas.height
        const r = orb.r * Math.min(canvas.width, canvas.height)

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        grad.addColorStop(0, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0.18)`)
        grad.addColorStop(0.5, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0.07)`)
        grad.addColorStop(1, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', setSize)
    return () => {
      window.removeEventListener('resize', setSize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 1 }} />
}

export default AuroraBackground

