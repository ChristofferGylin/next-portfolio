"use client"

import { useEffect, useRef } from "react"

type Eye = {
  cx: number
  cy: number
  eyeballRadius: number
  pupilRadius: number
}

const Octopus = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const mouseRef = useRef({ x: 256, y: 256 }) // Start in center
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 512
    canvas.height = 512

    const eyes: Eye[] = [
      { cx: 200, cy: 180, eyeballRadius: 27, pupilRadius: 16 },
      { cx: 312, cy: 180, eyeballRadius: 27, pupilRadius: 16 },
    ]

    const overlap = 5

    const loadImage = (src: string) =>
      new Promise<HTMLImageElement>((resolve) => {
        if (imageRef.current) {
          resolve(imageRef.current)
          return
        }
        const img = new Image()
        img.src = src
        img.onload = () => {
          imageRef.current = img
          resolve(img)
        }
      })

    const drawEye = (eye: Eye, mouseX: number, mouseY: number) => {
      const { cx, cy, eyeballRadius, pupilRadius } = eye
      const dx = mouseX - cx
      const dy = mouseY - cy
      const d = Math.sqrt(dx * dx + dy * dy)

      let pupilX = cx
      let pupilY = cy
      
      if (d > 0) {
        const scale = Math.min((eyeballRadius + overlap - pupilRadius) / d, 1)
        pupilX = cx + dx * scale
        pupilY = cy + dy * scale
      }

      // Draw eyeball
      ctx.fillStyle = "#f3e3d3"
      ctx.beginPath()
      ctx.arc(cx, cy, eyeballRadius, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()

      // Draw pupil with clip to prevent white bleed
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, eyeballRadius + 1, 0, Math.PI * 2) // slightly larger than eyeball to allow overlap
      ctx.clip()
  
      ctx.fillStyle = "#0f1b55"
      ctx.beginPath()
      ctx.arc(pupilX, pupilY, pupilRadius, 0, Math.PI * 2)
      ctx.fill()
  
      ctx.restore()
    }

    const render = () => {
      if (!ctx || !imageRef.current) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height)
      eyes.forEach((eye) => drawEye(eye, mouseRef.current.x, mouseRef.current.y))

      animationRef.current = requestAnimationFrame(render)
    }

    loadImage("/octopus1.png").then(() => {
      render()
    })

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = event.clientX - rect.left
      mouseRef.current.y = event.clientY - rect.top
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} style={{ display: "block" }} />
}

export default Octopus
