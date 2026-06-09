'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section, SectionHeading } from '@/components/section'
import { GithubIcon } from '@/components/icons'
import { projects } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-16 sm:gap-24">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8"
            >
              {/* Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'group relative col-span-12 block overflow-hidden rounded-xl border border-border lg:col-span-7',
                  reversed ? 'lg:order-2' : 'lg:order-1',
                )}
                aria-label={`View ${project.title} on GitHub`}
              >
                <div className="relative aspect-16/10 w-full">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-100 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              </a>

              {/* Text */}
              <div
                className={cn(
                  'col-span-12 lg:col-span-5',
                  reversed ? 'lg:order-1 lg:text-left' : 'lg:order-2 lg:text-right',
                )}
              >
                <p className="font-mono text-xs text-primary">
                  {project.year}
                </p>
                <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <div
                  className={cn(
                    'mt-4 rounded-xl border border-border bg-card p-5 text-pretty text-sm leading-relaxed text-muted-foreground shadow-sm',
                  )}
                >
                  {project.description}
                </div>
                <ul
                  className={cn(
                    'mt-4 flex flex-wrap gap-2',
                    reversed ? 'lg:justify-start' : 'lg:justify-end',
                  )}
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div
                  className={cn(
                    'mt-4 flex',
                    reversed ? 'lg:justify-start' : 'lg:justify-end',
                  )}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <GithubIcon className="size-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
