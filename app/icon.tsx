import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-touch-icon-BJA1aIvP97xIjXc78PV472vvLcblum.png"
        alt="BlueSky Icon"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>,
    {
      ...size,
    },
  )
}

