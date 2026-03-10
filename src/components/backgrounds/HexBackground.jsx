import { useEffect, useRef } from 'react'

// OPTION 3 - Floating Hexagon Circuit Board
const HexBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let tick = 0
    let animationFrame = 0

    const hexRadius = 36
    const hexW = hexRadius * 2
    const hexH = Math.sqrt(3) * hexRadius
    const hexes = []

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const buildHexes = () => {
      hexes.length = 0
      const cols = Math.ceil(canvas.width / (hexW * 0.75)) + 2
      const rows = Math.ceil(canvas.height / hexH) + 2

      for (let col = -1; col < cols; col += 1) {
        for (let row = -1; row < rows; row += 1) {
          const x = col * hexW * 0.75
          const y = row * hexH + (col % 2 === 0 ? 0 : hexH / 2)

          hexes.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.008 + 0.003,
            baseOpacity: Math.random() * 0.08 + 0.02,
          })
        }
      }
    }

    const drawHex = (x, y, r, opacity, filled = false) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI / 180) * (60 * i - 30)
        const px = x + r * Math.cos(angle)
        const py = y + r * Math.sin(angle)

        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      ctx.closePath()

      if (filled) {
        ctx.fillStyle = `rgba(239, 68, 68, ${opacity * 0.3})`
        ctx.fill()
      }

      ctx.strokeStyle = `rgba(250, 204, 21, ${opacity})`
      ctx.lineWidth = 0.8
      ctx.stroke()
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick += 0.01

      hexes.forEach((hex) => {
        const opacity = hex.baseOpacity + Math.sin(tick * hex.speed * 100 + hex.phase) * 0.05
        const pulse = Math.sin(tick * 0.8 + hex.phase) > 0.92
        drawHex(hex.x, hex.y, hexRadius - 2, Math.max(0, opacity), pulse)
      })

      animationFrame = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      setSize()
      buildHexes()
    }

    setSize()
    buildHexes()
    draw()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.75 }}
    />
  )
}

export default HexBackground
