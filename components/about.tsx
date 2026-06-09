import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { profile, education } from '@/lib/portfolio-data'
import { GraduationCap } from 'lucide-react'

export function About() {
  return (
    <Section id="about">
      <SectionHeading title="About Me" />
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="font-semibold text-card-foreground">Education</h3>
            </div>
            <div className="mt-5">
              <p className="font-medium text-card-foreground">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {education.school}
              </p>
              <p className="mt-2 font-mono text-xs text-primary">
                {education.period}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
