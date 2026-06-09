import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/icons'
import { profile } from '@/lib/portfolio-data'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24 text-center sm:py-32"
    >
      <Reveal>
        <p className="font-mono text-sm text-primary">What&apos;s Next?</p>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          I&apos;m currently open to new opportunities and collaborations. Whether
          you have a project in mind or just want to say hi, my inbox is always
          open.
        </p>
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-md border border-primary px-8 py-4 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
        >
          Say Hello
        </a>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" />
            {profile.phone}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </span>
        </div>
      </Reveal>

      <footer className="mt-20 border-t border-border pt-8">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex w-fit items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <GithubIcon className="size-5" />
          <span className="text-sm">GitHub</span>
        </a>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
          Designed &amp; built by {profile.name}
        </p>
      </footer>
    </section>
  )
}
