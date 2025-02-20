import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#29ABE2",
        borderRadius: "50%",
      }}
    >
      <div
        style={{
          fontSize: 24,
          color: "white",
          fontWeight: 700,
        }}
      >
        B
      </div>
    </div>,
    {
      ...size,
    },
  )
}

