import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRightIcon,
  CompassIcon,
  HeartHandshakeIcon,
  LeafIcon,
  PackageIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StoreIcon,
  TruckIcon,
} from "lucide-react"

const principles = [
  {
    title: "Thoughtful curation",
    description:
      "We focus on products that feel useful, well-made, and easy to trust at a glance.",
    icon: CompassIcon,
  },
  {
    title: "Reliable delivery",
    description:
      "Shipping, updates, and returns should feel calm and predictable instead of stressful.",
    icon: TruckIcon,
  },
  {
    title: "Human support",
    description:
      "When customers need help, they should reach a team that responds with clarity and care.",
    icon: HeartHandshakeIcon,
  },
]

const highlights = [
  { label: "Happy shoppers", value: "200k+" },
  { label: "Average rating", value: "4.9/5" },
  { label: "Cities served", value: "120+" },
  { label: "Support coverage", value: "24/7" },
]

const promises = [
  {
    title: "Clear product information",
    text: "So customers can compare quickly and buy with confidence.",
    icon: StoreIcon,
  },
  {
    title: "Secure checkout flow",
    text: "Protected payments and a smoother path from cart to confirmation.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Simple order management",
    text: "Tracking, updates, and support that stay organized after purchase.",
    icon: PackageIcon,
  },
  {
    title: "Lower-friction returns",
    text: "A friendlier process when something is not the right fit.",
    icon: LeafIcon,
  },
]

const timeline = [
  {
    step: "01",
    title: "We started with a simple idea",
    text: "Shopping online should feel polished, transparent, and easy for everyday buyers.",
  },
  {
    step: "02",
    title: "We built around trust first",
    text: "That meant better product storytelling, calmer design, and dependable order updates.",
  },
  {
    step: "03",
    title: "We keep refining the experience",
    text: "From browsing to delivery, every detail is shaped to reduce confusion and save time.",
  },
]

export default function Page() {
  return (
    <div className="bg-[radial-gradient(circle_at_top_left,rgba(214,239,192,0.7),transparent_24%),radial-gradient(circle_at_top_right,rgba(191,219,254,0.7),transparent_20%),linear-gradient(180deg,#fcfdf9_0%,#f4f8ee_44%,#fbfcf8_100%)]">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/65 p-6 shadow-[0_35px_100px_-50px_rgba(35,45,24,0.45)] backdrop-blur-2xl md:p-8 xl:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.14),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(163,230,53,0.16),transparent_24%)]" />
          <div className="relative grid gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
            <div>
              <Badge className="rounded-full border border-[#dce8ca] bg-[#f6fbef] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#556544] hover:bg-[#f6fbef]">
                About ShopHub
              </Badge>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#16200d] sm:text-5xl lg:text-6xl">
                We make online shopping feel cleaner, warmer, and easier to trust.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#627054] sm:text-lg">
                ShopHub is built for people who want a smoother way to browse,
                compare, and buy. We care about clear information, thoughtful
                presentation, and support that actually feels helpful.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-[#2f3b1d] px-6 text-white hover:bg-[#243015]"
                >
                  <Link href="/products">
                    Explore products
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-[#d3dfc5] bg-white/75 px-6 text-[#223013] hover:bg-[#f4f8ee]"
                >
                  <Link href="/contact">Talk to our team</Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.6rem] border border-white/70 bg-white/70 p-4 shadow-[0_20px_50px_-38px_rgba(35,45,24,0.45)] backdrop-blur"
                  >
                    <p className="text-2xl font-semibold text-[#17210e]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-[#6a775e]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-white/75 bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(242,247,235,0.8))] p-6 shadow-[0_24px_60px_-40px_rgba(35,45,24,0.4)] backdrop-blur-xl">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#eef5e5] text-[#3a5d19]">
                  <SparklesIcon className="size-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-[#16200d]">
                  A simpler standard for modern commerce
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#66725b]">
                  We are not trying to add noise. We are trying to remove it,
                  so product discovery, checkout, and post-purchase updates all
                  feel more natural.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-[#deead3] bg-[#f9fbf5] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7b886d]">
                    Our focus
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#1b2811]">
                    Practical shopping experiences that feel premium without
                    being complicated.
                  </p>
                </div>
                <div className="rounded-[1.8rem] border border-[#dbe6f2] bg-[#f7fbff] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7b8f]">
                    Our promise
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#1b2811]">
                    Every interaction should be easier to understand than the
                    one before it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#e0e9d6] bg-white/70 p-6 shadow-[0_24px_70px_-45px_rgba(35,45,24,0.35)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#738160]">
              Why we exist
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#16200d] sm:text-4xl">
              Better commerce starts with better clarity.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#66725b]">
              We believe design should help people move forward, not slow them
              down. That applies to product pages, checkout steps, order
              tracking, and support conversations.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/70 bg-white/68 p-6 shadow-[0_20px_60px_-44px_rgba(35,45,24,0.45)] backdrop-blur"
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-[#eef5e5] text-[#35591b]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[#18230f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#677359]">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-16 rounded-[2.25rem] border border-white/75 bg-white/65 p-6 shadow-[0_28px_80px_-46px_rgba(35,45,24,0.38)] backdrop-blur-2xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#738160]">
                What customers can expect
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#16200d] sm:text-4xl">
                A shopping journey that stays useful at every step.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-[#66725b]">
                From the first product click to the final delivery update, we
                keep the experience steady, transparent, and easy to follow.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {promises.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.8rem] border border-[#e2e9d9] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(247,250,242,0.82))] p-5"
                  >
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-[#f0f5ea] text-[#415532]">
                      <Icon className="size-4.5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#1a2510]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#66725b]">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.1rem] border border-[#dae4cf] bg-[#f9fbf6] p-6 shadow-[0_22px_60px_-44px_rgba(35,45,24,0.3)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#738160]">
              Our story
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#16200d] sm:text-4xl">
              We are building a calmer way to shop online.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#66725b]">
              ShopHub grew from a simple observation: too many storefronts ask
              customers to work too hard. We wanted a softer, more reliable
              experience that still feels elevated.
            </p>
          </div>

          <div className="space-y-4">
            {timeline.map((item) => (
              <div
                key={item.step}
                className="rounded-[2rem] border border-white/75 bg-white/72 p-6 shadow-[0_20px_55px_-42px_rgba(35,45,24,0.35)] backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#eef5e5] text-sm font-semibold text-[#31411f]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#18230f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#66725b]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2.4rem] border border-[#d8e2cc] bg-[linear-gradient(135deg,#273319_0%,#3f5226_45%,#6e8d35_100%)] p-8 shadow-[0_30px_90px_-50px_rgba(35,45,24,0.65)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9e7c5]">
                Ready to explore?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Discover a storefront designed to feel easier from the first
                click.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#ecf3e0]/80">
                Browse products, check categories, or reach out to our team if
                you want help finding the right fit.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-white px-6 text-[#223013] hover:bg-[#f4f8ee]"
              >
                <Link href="/categories">Browse categories</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 px-6 text-white hover:bg-white/18"
              >
                <Link href="/contact">Contact support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
