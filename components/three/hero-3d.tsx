"use client"

import Spline from "@splinetool/react-spline"

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyhX9uQ9m/scene.splinecode" />
    </div>
  )
}