import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

const TRAIL_POINT_LIMIT = 24
const TRAIL_STEP_PX = 6
const TRAIL_LIFE_MS = 220

const AnimatedCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [hoveringInteractive, setHoveringInteractive] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const lastPointRef = useRef({ x: -100, y: -100 })
  const pointIdRef = useRef(0)
  const [trailPoints, setTrailPoints] = useState([])

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)')
    const updateEnabled = () => setEnabled(media.matches)
    updateEnabled()

    const handleMouseMove = (e) => {
      const nextX = e.clientX
      const nextY = e.clientY
      const now = performance.now()

      x.set(nextX)
      y.set(nextY)

      const last = lastPointRef.current
      const dx = nextX - last.x
      const dy = nextY - last.y
      const distance = Math.hypot(dx, dy)
      const steps = Math.max(1, Math.ceil(distance / TRAIL_STEP_PX))

      const injected = []
      for (let i = 1; i <= steps; i += 1) {
        const t = i / steps
        injected.push({
          id: pointIdRef.current++,
          x: last.x + dx * t,
          y: last.y + dy * t,
          createdAt: now,
        })
      }

      setTrailPoints((prev) => [...injected, ...prev].slice(0, TRAIL_POINT_LIMIT))
      lastPointRef.current = { x: nextX, y: nextY }
    }

    const handleMouseDown = () => setPressed(true)
    const handleMouseUp = () => setPressed(false)

    const handleInteractiveEnter = (e) => {
      const target = e.target
      if (target.closest('a, button, input, textarea, select, [role="button"]')) {
        setHoveringInteractive(true)
      }
    }

    const handleInteractiveLeave = () => setHoveringInteractive(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleInteractiveEnter)
    document.addEventListener('mouseout', handleInteractiveLeave)
    media.addEventListener('change', updateEnabled)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleInteractiveEnter)
      document.removeEventListener('mouseout', handleInteractiveLeave)
      media.removeEventListener('change', updateEnabled)
    }
  }, [x, y])

  useEffect(() => {
    const timer = window.setInterval(() => {
      const now = performance.now()
      setTrailPoints((prev) => prev.filter((p) => now - p.createdAt < TRAIL_LIFE_MS))
    }, 16)

    return () => window.clearInterval(timer)
  }, [])

  if (!enabled) return null

  const ringScale = pressed ? 0.85 : hoveringInteractive ? 1.22 : 1
  const dotScale = pressed ? 0.92 : hoveringInteractive ? 1.12 : 1
  const now = performance.now()

  return (
    <>
      {trailPoints.map((point, i) => {
        const age = now - point.createdAt
        const life = Math.max(0, 1 - age / TRAIL_LIFE_MS)
        if (life <= 0) return null

        const scale = Math.max(0.2, (1 - i * 0.045) * life)
        const opacityBase = hoveringInteractive ? 0.5 : 0.42

        return (
          <div
            key={point.id}
            className="custom-cursor-trail"
            style={{
              left: point.x,
              top: point.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: Math.max(0, opacityBase * life),
            }}
          />
        )
      })}

      <motion.div
        className="custom-cursor-dot"
        style={{ x, y }}
        animate={{ scale: dotScale, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
      />
      <motion.div
        className="custom-cursor-ring"
        style={{ x, y }}
        animate={{ scale: ringScale, opacity: hoveringInteractive ? 0.95 : 0.78 }}
        transition={{ type: 'spring', stiffness: 360, damping: 26 }}
      />
    </>
  )
}

export default AnimatedCursor
