"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Form = {
  name: string
  email: string
  teamName: string
  track: string
  agree: boolean
}

const TRACKS = [
  "Financial Literacy (Rural)",
  "Multilingual Accessibility",
  "AI Tutors (Schools)",
  "Bias-Free Recruitment",
  "Energy Saving",
  "Open Challenge",
]

export function Registration() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<Form>({ name: "", email: "", teamName: "", track: "", agree: false })
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const steps = [{ title: "Basic Info" }, { title: "Team & Track" }, { title: "Guidelines" }]
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step, steps.length])

  function validate() {
    const errs: string[] = []
    if (!form.name) errs.push("name")
    if (!/.+@.+\..+/.test(form.email)) errs.push("email")
    if (step >= 1) {
      if (!form.teamName) errs.push("teamName")
      if (!form.track) errs.push("track")
    }
    if (step >= 2) {
      if (!form.agree) errs.push("agree")
    }
    return errs
  }

  const errors = validate()
  const canNext = errors.length === 0

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium">{steps[step].title}</div>
        <div className="text-xs text-muted-foreground">
          {step + 1} / {steps.length}
        </div>
      </div>
      <Progress value={progress} className="mb-6" />

      {step === 0 && (
        <div className="grid gap-4">
          <Field label="Full Name" error={touched.name && !form.name}>
            <Input
              placeholder="Jane Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              aria-invalid={touched.name && !form.name}
              aria-describedby="name-help"
            />
            <Help id="name-help" text="Enter your legal name for certificates." />
          </Field>

          <Field label="Email" error={touched.email && !/.+@.+\..+/.test(form.email)}>
            <Input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              aria-invalid={touched.email && !/.+@.+\..+/.test(form.email)}
            />
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4">
          <Field label="Team Name" error={touched.teamName && !form.teamName}>
            <Input
              placeholder="Inclusive Innovators"
              value={form.teamName}
              onChange={(e) => setForm({ ...form, teamName: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, teamName: true }))}
              aria-invalid={touched.teamName && !form.teamName}
            />
          </Field>

          <Field label="Track" error={touched.track && !form.track}>
            <select
              className="h-10 rounded-md border bg-background"
              value={form.track}
              onChange={(e) => setForm({ ...form, track: e.target.value })}
              onBlur={() => setTouched((t) => ({ ...t, track: true }))}
              aria-invalid={touched.track && !form.track}
            >
              <option value="">Select a track…</option>
              {TRACKS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-4">
          <details className="rounded-md border p-4 bg-card">
            <summary className="cursor-pointer font-medium">Eligibility criteria</summary>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              <li>Students and professionals worldwide</li>
              <li>Teams of 1-5 participants</li>
              <li>Project submissions before the deadline</li>
            </ul>
          </details>
          <details className="rounded-md border p-4 bg-card">
            <summary className="cursor-pointer font-medium">Guidelines</summary>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
              <li>Ensure accessibility and fairness by design</li>
              <li>Respect data privacy and consent</li>
              <li>Provide a concise README and demo</li>
            </ul>
          </details>
          <label
            className={cn(
              "flex items-start gap-3 rounded-md border p-3",
              errors.includes("agree") ? "border-destructive" : "",
            )}
          >
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              aria-invalid={errors.includes("agree")}
            />
            <span className="text-sm">I agree to the hackathon’s code of conduct and data policies.</span>
          </label>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          Back
        </Button>
        {step < 2 ? (
          <Button
            className="bg-brand text-primary-foreground hover:bg-brand/90"
            onClick={() => setStep((s) => Math.min(2, s + 1))}
            disabled={!canNext}
          >
            Next
          </Button>
        ) : (
          <Button
            className="bg-brand text-primary-foreground hover:bg-brand/90"
            onClick={() => alert(`Thanks ${form.name}! Check your email for next steps.`)}
            disabled={!canNext}
          >
            Submit
          </Button>
        )}
      </div>

      {/* real-time validation feedback */}
      <div aria-live="polite" className="mt-3 text-xs text-muted-foreground flex items-center gap-2">
        {errors.length === 0 ? (
          <>
            <CheckCircle2 className="h-4 w-4 text-brand" />
            Looks good!
          </>
        ) : (
          <>Complete the highlighted fields to continue.</>
        )}
      </div>
    </div>
  )
}

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: boolean }) {
  return (
    <div>
      <Label className="text-sm">{label}</Label>
      <div className={cn("mt-1", error ? "animate-shake" : "")}>{children}</div>
      {error && <p className="mt-1 text-xs text-destructive">Please provide a valid {label.toLowerCase()}.</p>}
    </div>
  )
}

function Help({ id, text }: { id: string; text: string }) {
  return (
    <p id={id} className="mt-1 text-xs text-muted-foreground">
      {text}
    </p>
  )
}
