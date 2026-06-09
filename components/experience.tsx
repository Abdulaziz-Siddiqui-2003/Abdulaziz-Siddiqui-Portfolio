import { Section, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { experiences } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" />
      <div className="relative ml-3 border-l border-border pl-8 sm:pl-10">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company + exp.role} delay={i * 0.08}>
            <div className="relative pb-24 last:pb-0 sm:pb-32">
              <span className="absolute -left-10.25 top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-12.25">
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
              <p className="font-mono text-xs text-primary">{exp.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {exp.role}{' '}
                <span className="text-muted-foreground">@ {exp.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 pb-8">
                {exp.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tag}
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
