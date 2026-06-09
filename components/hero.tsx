'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from '@/components/icons'
import { AnimatedText } from '@/components/animated-text'
import { profile } from '@/lib/portfolio-data'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-16 sm:px-6 sm:pt-24"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 size-160 rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 size-120 rounded-full bg-chart-3/10 blur-[120px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={item}
          className="mb-5 font-mono text-sm text-primary"
        >
          Hi, my name is
        </motion.p>
        <div className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
          <AnimatedText text={profile.name} delay={0.3} staggerChildren={0.04} />
          <AnimatedText text="." delay={0.6} staggerChildren={0} />
        </div>
        <div className="mt-3 text-balance text-xl font-bold tracking-tight text-muted-foreground sm:text-3xl lg:text-6xl">
          <AnimatedText text={profile.role} delay={0.5} staggerChildren={0.03} />
          <AnimatedText text="." delay={1} staggerChildren={0} />
        </div>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#projects"
            className="rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3 sm:text-sm"
          >
            View my work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary sm:px-6 sm:py-3 sm:text-sm"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary sm:px-6 sm:py-3 sm:text-sm"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-3 text-xs text-muted-foreground sm:flex-wrap sm:flex-row sm:gap-x-6 sm:gap-y-3 sm:text-sm"
        >
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            {profile.email}
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground sm:bottom-8"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="block"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
