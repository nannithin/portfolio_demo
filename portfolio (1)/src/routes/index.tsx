import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";

import heroImg from "@/assets/hero.jpg";
import series1 from "@/assets/series-1.jpg";
import series2 from "@/assets/series-2.jpg";
import series3 from "@/assets/series-3.jpg";
import series4 from "@/assets/series-4.jpg";
import aboutImg from "@/assets/about.jpg";
import { DiscordPresenceCard, PresenceDot } from "@/components/DiscordPresence";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useDiscordPresence } from "@/hooks/use-discord-presence";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maren Holt — Golden-Hour Portrait & Fine Art Photographer" },
      {
        name: "description",
        content:
          "Fine-art and portrait photography shot on film in golden hour light. Curated series, archival prints and editorial commissions by Maren Holt.",
      },
      { property: "og:title", content: "Maren Holt — Golden-Hour Portrait & Fine Art Photographer" },
      {
        property: "og:description",
        content: "Curated film series, archival prints and editorial commissions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] as const },
};

const series = [
  { img: series1, no: "Series 01", title: "Still Hours", meta: "12 frames · 2024", offset: false },
  { img: series2, no: "Series 02", title: "The Golden Field", meta: "18 frames · 2023", offset: true },
  { img: series3, no: "Series 03", title: "Portra", meta: "09 frames · 2024", offset: false },
  { img: series4, no: "Series 04", title: "Coastline", meta: "14 frames · 2022", offset: true },
];

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.a
      href={href}
      className="relative py-1 hover:text-ink transition-colors"
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
      <motion.span
        aria-hidden
        className="absolute left-0 -bottom-0.5 h-px w-full origin-left bg-amber"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </motion.a>
  );
}

function Index() {
  const { meta } = useDiscordPresence();

  return (
    <>
      <header className="bg-paper/85 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-serif text-[22px] text-ink tracking-tight">Maren Holt</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.22em] text-ink/45">
              Photographer
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.14em] text-ink/55">
            <NavLink href="#series">Series</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="text-[12px] uppercase tracking-[0.14em] text-cream dark:text-ink bg-ink dark:bg-cream px-4 py-2 rounded-full ring-1 ring-ink/20 hover:opacity-90 transition-opacity"
            >
              Enquire
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="font-sans">
        {/* HERO */}
        <section className="bg-paper">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-10 pt-14 sm:pt-20 pb-16">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-amber mb-8">
                  Editorial · Portrait · Fine Art
                </p>
                <h1 className="font-serif font-medium text-[15vw] sm:text-[4.5rem] lg:text-[5.4rem] leading-[0.92] tracking-tight text-ink text-balance max-w-[16ch]">
                  Light, held
                  <br />
                  for a moment.
                </h1>
                <p className="mt-8 text-base sm:text-[17px] leading-relaxed text-ink/65 text-pretty max-w-[42ch]">
                  Available light. Unhurried portraits. I photograph the hour the day softens into
                  gold — and the people who live in it.
                </p>
              </motion.div>
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <div className="relative">
                  <img
                    src={heroImg}
                    alt="Golden-hour portrait of a woman in a linen shirt"
                    width={1600}
                    height={1000}
                    className="w-full aspect-[16/10] object-cover outline-1 -outline-offset-1 outline-black/5 rounded-[min(1vw,12px)]"
                  />
                  <div className="absolute -bottom-5 left-6 bg-cream px-5 py-3 rounded-[min(1vw,8px)] ring-1 ring-black/5">
                    <p className="font-serif italic text-[15px] text-ink/70">
                      Coastline, 18:42 — the last warm light.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERIES */}
        <section id="series" className="bg-cream">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-20 sm:py-28">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-3">
                <motion.div className="lg:sticky lg:top-24" {...reveal}>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-amber mb-5">
                    Curated Series
                  </p>
                  <h2 className="font-serif font-medium text-[2.6rem] leading-tight text-ink text-balance max-w-[12ch]">
                    Four bodies of work, printed to last.
                  </h2>
                  <p className="mt-6 text-sm leading-relaxed text-ink/60 text-pretty max-w-[30ch]">
                    Each series is shot on film, colour-graded by hand, and offered as archival
                    fine-art prints.
                  </p>
                  <ol className="mt-10 space-y-3 text-[12px] uppercase tracking-[0.14em]">
                    <li className="text-ink/40">01 — Still Hours</li>
                    <li className="text-ink">02 — The Golden Field</li>
                    <li className="text-ink/40">03 — Portra</li>
                    <li className="text-ink/40">04 — Coastline</li>
                  </ol>
                </motion.div>
              </div>

              <div className="lg:col-span-9 grid sm:grid-cols-2 gap-x-8 gap-y-16">
                {series.map((s) => (
                  <motion.article
                    key={s.title}
                    className={`group ${s.offset ? "sm:translate-y-16" : ""}`}
                    {...reveal}
                  >
                    <div className="relative overflow-hidden rounded-[min(1vw,12px)]">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        width={1024}
                        height={1280}
                        className="w-full aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-90" />
                      <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-cream/70">{s.no}</p>
                        <p className="font-serif text-[1.6rem] leading-tight text-cream">{s.title}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.12em] text-ink/45">{s.meta}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-paper">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-20 sm:py-28">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.div className="lg:col-span-5" {...reveal}>
                <div className="relative max-w-[420px]">
                  <img
                    src={aboutImg}
                    alt="Maren Holt holding a film camera in warm window light"
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-black/5 rounded-[min(1vw,12px)]"
                  />
                  <DiscordPresenceCard />
                </div>
              </motion.div>
              <motion.div className="lg:col-span-7" {...reveal}>
                <p className="text-[11px] uppercase tracking-[0.28em] text-amber mb-6">About</p>
                <h2 className="font-serif font-medium text-[2.4rem] sm:text-[3rem] leading-tight text-ink text-balance max-w-[18ch]">
                  I made my name chasing the last hour of light.
                </h2>
                <p className="mt-7 text-base sm:text-[17px] leading-relaxed text-ink/70 text-pretty max-w-[52ch]">
                  I'm Maren Holt, a fine-art and portrait photographer working from a small studio in
                  the north of Portugal. For twelve years I've shot on film and printed my own work,
                  because the grain and the hand are the point.
                </p>
                <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-ink/70 text-pretty max-w-[52ch]">
                  I take on a limited number of commissions each season so every frame gets the
                  attention it deserves. Reach out on Discord and I'll usually answer within the hour.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-cream">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-20 sm:py-28">
            <motion.div className="max-w-[30ch] mb-14" {...reveal}>
              <p className="text-[11px] uppercase tracking-[0.28em] text-amber mb-6">Services</p>
              <h2 className="font-serif font-medium text-[2.4rem] sm:text-[3rem] leading-tight text-ink text-balance">
                Three ways to work together.
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-5">
              <motion.div
                className="bg-paper p-7 rounded-[min(1vw,12px)] ring-1 ring-black/5"
                {...reveal}
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">01</p>
                <h3 className="mt-4 font-serif text-[1.6rem] text-ink">Editorial Session</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 text-pretty">
                  Half a day with one subject, delivered as a hand-graded print series.
                </p>
                <p className="mt-6 font-serif text-[1.35rem] text-ink">from €950</p>
              </motion.div>
              <motion.div className="bg-ink p-7 rounded-[min(1vw,12px)] ring-1 ring-ink/20" {...reveal}>
                <p className="text-[11px] uppercase tracking-[0.18em] text-cream/50">02</p>
                <h3 className="mt-4 font-serif text-[1.6rem] text-cream">Fine-Art Prints</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70 text-pretty">
                  Editioned archival giclée and pigment prints, hand-signed and numbered.
                </p>
                <p className="mt-6 font-serif text-[1.35rem] text-cream">from €180</p>
              </motion.div>
              <motion.div
                className="bg-paper p-7 rounded-[min(1vw,12px)] ring-1 ring-black/5"
                {...reveal}
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">03</p>
                <h3 className="mt-4 font-serif text-[1.6rem] text-ink">Commissioned Series</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 text-pretty">
                  A full multi-week body of work for brands and cultural institutions.
                </p>
                <p className="mt-6 font-serif text-[1.35rem] text-ink">enquire</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-paper">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-24 sm:py-32">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <motion.div className="lg:col-span-7" {...reveal}>
                <p className="text-[11px] uppercase tracking-[0.28em] text-amber mb-8">Contact</p>
                <a
                  href="mailto:studio@marenholt.com"
                  className="font-serif font-light text-[6.5vw] sm:text-[4.5rem] leading-[1.02] tracking-tight text-ink hover:text-amber transition-colors text-balance max-w-[14ch]"
                >
                  studio@marenholt.com
                </a>
              </motion.div>
              <motion.div className="lg:col-span-5" {...reveal}>
                <div className="bg-cream p-6 rounded-[min(1vw,12px)] ring-1 ring-black/5">
                  <div className="flex items-center gap-2.5">
                    <PresenceDot />
                    <p className="text-[13px] text-ink">Discord · {meta.label} — messages welcome.</p>
                  </div>
                  <a
                    href={`https://discord.com/users/1166832364631109654`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-ink text-cream text-sm px-5 py-3 rounded-full ring-1 ring-amber/40 hover:bg-ink/90 transition-colors"
                  >
                    Start a conversation
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2b2419]">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-serif text-[18px] text-[#fbf8f1]/80">Maren Holt</p>
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#fbf8f1]/40">
            © 2025 · All images shot on film
          </p>
        </div>
      </footer>
    </>
  );
}
