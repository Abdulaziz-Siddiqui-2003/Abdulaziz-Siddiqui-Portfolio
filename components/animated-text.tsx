'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  staggerChildren?: number
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  staggerChildren = 0.05,
}: AnimatedTextProps) {
  const characters = text.split('')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const characterVariants = {
    hidden: { opacity: 0, y: 20, rotateZ: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={characterVariants}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
