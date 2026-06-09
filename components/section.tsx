import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

export function SectionHeading({
  number,
  title,
}: {
  number?: string
  title: string
}) {
  return (
    <Reveal>
      <div className="mb-10 flex items-center gap-4">
        <h2 className="flex items-baseline gap-3 whitespace-nowrap text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {number && (
            <span className="font-mono text-lg font-normal text-primary">
              {number}.
            </span>
          )}
          {title}
        </h2>
        <span className="h-px w-full max-w-xs bg-border" />
      </div>
    </Reveal>
  )
}

export function Section({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      {children}
    </section>
  )
}
