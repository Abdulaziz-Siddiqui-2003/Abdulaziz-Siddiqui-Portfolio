'use client'

import { useEffect, useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'
import type { AnimationControls, Variants } from 'framer-motion'

interface UseScrollAnimationOptions {
  threshold?: number
  margin?: string
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): [React.RefObject<HTMLDivElement>, AnimationControls, boolean] {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const isInView = useInView(ref, {
    once: true,
    margin: options.margin || '-80px',
    amount: options.threshold || 0.3,
  })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return [ref, controls, isInView]
}
