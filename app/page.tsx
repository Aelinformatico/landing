"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, ShieldCheck, Sparkles, Star, Zap } from "lucide-react"
import { gsap } from "gsap"

import { Button } from "@/components/ui/button"

const rollTextStyle = {
  display: "inline-block",
  overflow: "hidden",
  verticalAlign: "top",
} as const

const features = [
  {
    icon: Sparkles,
    title: "Brand direction",
    text: "A strong visual identity that turns attention into trust from the first scroll.",
  },
  {
    icon: Zap,
    title: "Fast execution",
    text: "Launch-ready landing pages designed to feel premium and convert visitors quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Built to scale",
    text: "Clean structure, reusable components, and a smooth experience across devices.",
  },
]

const stats = [
  { value: "4.9/5", label: "customer rating" },
  { value: "12k+", label: "qualified visits" },
  { value: "3x", label: "faster launches" },
]

export default function Page() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleLineRefs = useRef<Array<HTMLSpanElement | null>>([])
  const textRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      )

      gsap.fromTo(
        titleLineRefs.current,
        { x: -220, opacity: 0, rotateY: -60, filter: "blur(10px)" },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          filter: "blur(0px)",
          duration: 1.4,
          stagger: 0.2,
          ease: "power4.out",
        }
      )

      gsap.fromTo(
        textRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: "power3.out" }
      )

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      )

      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, delay: 0.35, ease: "power3.out" }
      )

      gsap.to(videoRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_35%),linear-gradient(135deg,#0b1020_0%,#111827_44%,#0f172a_100%)] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg font-semibold shadow-lg shadow-indigo-500/20">
              L
            </div>
            <span className="text-sm font-medium tracking-[0.2em] text-slate-300 uppercase">
              Lunar Studio
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#process">Process</a>
            <a className="transition hover:text-white" href="#pricing">Pricing</a>
          </nav>

          <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
            Book a call
          </Button>
        </header>

        <section className="grid items-center gap-10 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:pt-14">
          <div>
            <div
              ref={badgeRef}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-200"
            >
              <Star className="h-3.5 w-3.5 fill-indigo-300 text-indigo-300" />
              New product launch system
            </div>

            <h1
              ref={titleRef}
              className="max-w-xl text-4xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl"
              style={rollTextStyle}
            >
              <span
                ref={(el) => {
                  titleLineRefs.current[0] = el
                }}
                className="block px-[60px] py-[10px] leading-[0.8]"
              >
                Alfonso
              </span>
              <span
                ref={(el) => {
                  titleLineRefs.current[1] = el
                }}
                className="mt-2 block bg-gradient-to-r from-indigo-200 via-cyan-200 to-fuchsia-300 bg-clip-text px-[60px] py-[10px] leading-[0.82] text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                style={{ fontFamily: '"Playwrite BE WAL Guides", cursive' }}
              >
                en el casino
              </span>
            </h1>

            <p
              ref={textRef}
              className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg"
              style={rollTextStyle}
            >
              We turn ideas into high-converting landing pages that feel premium, move fast, and help your audience say yes in seconds.
            </p>

            <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110">
                Start your project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                See examples
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div ref={videoRef} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-cyan-400/20 blur-2xl" />
            <div className="overflow-hidden rounded-[32px] border border-white/15 bg-white/5 p-3 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/80">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-[430px] w-full object-cover"
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-indigo-200">Campaign overview</p>
                      <div className="mt-2 text-2xl font-bold text-white">+184%</div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200">
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="pb-20">
          <div className="mb-10 max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-indigo-200">Why teams choose us</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Everything your launch needs to feel premium.</h2>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1.2fr_1.1fr]">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-indigo-950/30">
              <img
                src="/images/sandisk-UKtuLKxjRfk-unsplash.jpg"
                alt="Casino visual"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:col-span-1 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                const cardColor =
                  index === 1 ? "bg-[hsl(0_84.2%_60.2%)]" : "bg-[hsl(45.4_93.4%_47.5%)]"

                return (
                  <div
                    key={feature.title}
                    ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                    className={`rounded-3xl border border-white/10 ${cardColor} p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-400/40`}
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-indigo-500/15 p-3 text-indigo-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm leading-7 text-slate-300">{feature.text}</p>
                  </div>
                )
              })}
            </div>

            <div className="ml-[70px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-indigo-950/30">
              <img
                src="/images/frank-huang-NT8soa0sHto-unsplash.jpg"
                alt="Casino second visual"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
