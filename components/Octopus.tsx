"use client"

import { useEffect, useRef } from "react"

type Eye = {
  cx: number;
  cy: number;
  eyeballRadius: number;
  pupilRadius: number;
}

const Octopus = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

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

    const image = new Image()

    image.src = "/octopus1.png"

    const drawEye = (eye: Eye, mouseX: number, mouseY: number) => {
      const { cx, cy, eyeballRadius, pupilRadius } = eye
      
      // Vector to cursor

      let dx = mouseX - cx
      let dy = mouseY - cy
      let d = Math.sqrt(dx * dx + dy * dy)

      // Constrain pupil inside the eye

      let pupilX = cx
      let pupilY = cy
      if (d > 0) {
        let scale = Math.min((eyeballRadius + overlap - pupilRadius) / d, 1)
        pupilX = cx + dx * scale
        pupilY = cy + dy * scale
      }
      
      // Draw eyeball

      ctx.fillStyle = "#f3e3d3"
      ctx.beginPath()
      ctx.arc(cx, cy, eyeballRadius, 0, Math.PI * 2)
      ctx.fill()
      ctx.stroke()
      
      // Draw pupil
      
      ctx.fillStyle = "#0f1b55"
      ctx.beginPath()
      ctx.arc(pupilX, pupilY, pupilRadius, 0, Math.PI * 2)
      ctx.fill()
    }

    const updateEyes = (event: MouseEvent) => {
      if (!canvas || !ctx) return
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      eyes.forEach((eye) => {
        ctx.arc(eye.cx, eye.cy, eye.eyeballRadius + 1, 0, Math.PI * 2)
      })
      ctx.clip()
      eyes.forEach((eye) => drawEye(eye, mouseX, mouseY))
      ctx.beginPath()
      ctx.rect(0, 0, canvas.width, canvas.height)
      ctx.clip()
    }

    image.onload = () => {
      updateEyes({ clientX: 0 , clientY: 0 } as MouseEvent)
    }

    window.addEventListener("mousemove", updateEyes)
    
    return () => window.removeEventListener("mousemove", updateEyes)
  }, [])

  return <canvas ref={canvasRef} />
}

export default Octopus