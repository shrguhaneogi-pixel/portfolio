"use client"

import { ReactNode } from "react"
import useSmoothScroll from "@/hooks/use-smooth-scroll"

interface ScrollProviderProps {
  children: ReactNode
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
  useSmoothScroll()

  return <>{children}</>
}