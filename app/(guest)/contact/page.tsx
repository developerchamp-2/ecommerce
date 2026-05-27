"use client"

import React, { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Field, FieldContent, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  ArrowRightIcon,
  Clock3Icon,
  HeadphonesIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareHeartIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "lucide-react"

const contactWays = [
  {
    title: "Call our team",
    value: "+1 (555) 123-4567",
    note: "For urgent order or account questions.",
    icon: PhoneIcon,
    tint: "bg-[#eef5ff] text-[#1f6feb]",
  },
  {
    title: "Email support",
    value: "support@shophub.example",
    note: "Best for detailed requests and follow-ups.",
    icon: MailIcon,
    tint: "bg-[#eef6ea] text-[#42621f]",
  },
  {
    title: "Visit the office",
    value: "123 Commerce Ave, Suite 400, Austin, TX",
    note: "Mon-Fri for scheduled meetings only.",
    icon: MapPinIcon,
    tint: "bg-[#fff4e7] text-[#a45d12]",
  },
]

const supportNotes = [
  {
    title: "Typical reply time",
    text: "Within one business day for most requests.",
    icon: Clock3Icon,
  },
  {
    title: "Helpful support",
    text: "Real people who can guide orders, products, and account issues.",
    icon: HeadphonesIcon,
  },
  {
    title: "Privacy first",
    text: "Your contact information stays protected and is only used to reply.",
    icon: ShieldCheckIcon,
  },
]

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle")
  const [errors, setErrors] = useState<string[]>([])

  function validate() {
    const errs: string[] = []
    if (!name.trim()) errs.push("Please enter your name.")
    if (!email.trim()) errs.push("Please enter your email.")
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push("Please enter a valid email address.")
    if (!message.trim()) errs.push("Please enter a message.")
    return errs
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrors([])
    const v = validate()
    if (v.length) {
      setErrors(v)
      return
    }

    try {
      setStatus("sending")
      await new Promise((r) => setTimeout(r, 800))
      setStatus("success")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="bg-[radial-gradient(circle_at_top_left,rgba(214,239,192,0.72),transparent_25%),radial-gradient(circle_at_top_right,rgba(191,219,254,0.7),transparent_22%),linear-gradient(180deg,#fcfdf9_0%,#f3f8ec_44%,#fbfcf8_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/65 p-6 shadow-[0_35px_100px_-50px_rgba(35,45,24,0.45)] backdrop-blur-2xl md:p-8 xl:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(163,230,53,0.16),transparent_26%)]" />
          <div className="relative grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dce8ca] bg-[#f6fbef] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#556544]">
                <MessageSquareHeartIcon className="h-3.5 w-3.5" />
                Contact ShopHub
              </div>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-[#16200d] sm:text-5xl">
                Reach out with questions, support needs, or partnership ideas.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#627054] sm:text-lg">
                Whether you need help with an order, want product guidance, or
                have a business inquiry, our team is here to make the next step
                feel simple.
              </p>

              <div className="mt-8 grid gap-4">
                {contactWays.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.75rem] border border-white/75 bg-white/72 p-4 shadow-[0_18px_45px_-35px_rgba(35,45,24,0.4)] backdrop-blur"
                    >
                      <div className="flex items-start gap-4">
                        <span className={`rounded-2xl p-3 ${item.tint}`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[#1d2811]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm font-medium text-[#223013]">
                            {item.value}
                          </p>
                          <p className="mt-1 text-sm text-[#66725b]">
                            {item.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {supportNotes.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.6rem] border border-[#e0e8d5] bg-[#f9fbf6] p-4"
                    >
                      <div className="flex size-10 items-center justify-center rounded-2xl bg-[#eef5e5] text-[#415532]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-4 text-sm font-semibold text-[#1d2811]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#677359]">
                        {item.text}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(246,250,241,0.84))] p-6 shadow-[0_30px_80px_-50px_rgba(35,45,24,0.45)] backdrop-blur-2xl md:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#738160]">
                  Send a message
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#16200d] sm:text-3xl">
                  Tell us what you need and we will take it from there.
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#66725b]">
                  Share as much detail as you can. That helps us respond faster
                  and point you in the right direction.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field>
                    <FieldLabel className="text-sm font-semibold text-[#223013]">
                      Name
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="h-12 rounded-2xl border-[#d8dfcc] bg-white/80 px-4 text-[#1f2a13] placeholder:text-[#7a866d] focus-visible:border-[#93a374]"
                      />
                    </FieldContent>
                  </Field>

                  <Field>
                    <FieldLabel className="text-sm font-semibold text-[#223013]">
                      Email
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        type="email"
                        className="h-12 rounded-2xl border-[#d8dfcc] bg-white/80 px-4 text-[#1f2a13] placeholder:text-[#7a866d] focus-visible:border-[#93a374]"
                      />
                    </FieldContent>
                  </Field>
                </div>

                <Field>
                  <FieldLabel className="text-sm font-semibold text-[#223013]">
                    Subject
                  </FieldLabel>
                  <FieldContent>
                    <Input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="How can we help?"
                      className="h-12 rounded-2xl border-[#d8dfcc] bg-white/80 px-4 text-[#1f2a13] placeholder:text-[#7a866d] focus-visible:border-[#93a374]"
                    />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel className="text-sm font-semibold text-[#223013]">
                    Message
                  </FieldLabel>
                  <FieldContent>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your request"
                      className="min-h-36 w-full rounded-[1.4rem] border border-[#d8dfcc] bg-white/82 px-4 py-3 text-sm text-[#1f2a13] outline-none transition placeholder:text-[#7a866d] focus-visible:border-[#93a374] focus-visible:ring-3 focus-visible:ring-[#dce8ca]"
                    />
                  </FieldContent>
                </Field>

                {errors.length > 0 && (
                  <div className="rounded-[1.3rem] border border-[#efb4b4] bg-[#fff6f6] p-4 text-sm text-[#9f2f2f]">
                    <FieldError>
                      <ul className="ml-4 list-disc space-y-1">
                        {errors.map((err, i) => (
                          <li key={i}>{err}</li>
                        ))}
                      </ul>
                    </FieldError>
                  </div>
                )}

                <div className="rounded-[1.5rem] border border-[#e4eadb] bg-white/70 p-4 text-sm text-[#66725b]">
                  By contacting us, you agree to our{" "}
                  <Link href="/privacy" className="font-medium text-[#314d18] underline underline-offset-4">
                    privacy policy
                  </Link>
                  . We only use your details to respond to your request.
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    className="h-12 rounded-full bg-[#2f3b1d] px-6 text-white hover:bg-[#243015]"
                    type="submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    {status !== "sending" && <ArrowRightIcon className="ml-2 h-4 w-4" />}
                  </Button>

                  <div className="text-sm">
                    {status === "success" && (
                      <p className="font-medium text-[#2d7a36]">
                        Thanks, we will reply shortly.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="font-medium text-[#b23a3a]">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    {status !== "success" && status !== "error" && (
                      <p className="text-[#6d7a61]">
                        Most messages receive a reply within one business day.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
