"use client"

import dynamic from "next/dynamic"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
})

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-screen overflow-hidden bg-transparent">
      <Spline scene="https://prod.spline.design/zvxr9bR0U3JxBe0x/scene.splinecode" />
    </div>
  )
}