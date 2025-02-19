"use client"

import { useEffect, useState } from "react"

export function CursorTrail() {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail((prevTrail) => [...prevTrail.slice(-5), { x: e.clientX, y: e.clientY, id: Date.now() }])
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      {trail.map(({ x, y, id }) => (
        <div
          key={id}
          className="cursor-trail"
          style={{
            left: x,
            top: y,
          }}
        />
      ))}
    </>
  )
}

