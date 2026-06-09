import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { skillGroups } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading title="Skills & Technologies" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
              <h3 className="font-mono text-sm font-semibold text-primary">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
