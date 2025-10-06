"use client"

import { useEffect, useMemo, useState } from "react"
import { Calendar, Users, Wrench, Presentation, Trophy, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const EVENTS = [
  { title: "Registration Opens", icon: Calendar },
  { title: "Team Formation & Ideation", icon: Users },
  { title: "Prototype Development Phase", icon: Wrench },
  { title: "Final Presentations", icon: Presentation },
  { title: "Winner Announcement", icon: Trophy },
]

const REG_DEADLINE = new Date(new Date().getFullYear(), 10, 15, 23, 59, 59) // Nov 15, 23:59:59 local (month 10 is Nov)

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const ms = Math.max(0, target.getTime() - now.getTime())
  const s = Math.floor(ms / 1000) % 60
  const m = Math.floor(ms / (1000 * 60)) % 60
  const h = Math.floor(ms / (1000 * 60 * 60)) % 24
  const d = Math.floor(ms / (1000 * 60 * 60 * 24))
  return { d, h, m, s }
}

export function Timeline() {
  const { d, h, m, s } = useCountdown(REG_DEADLINE)
  const doneIndex = useMemo(() => 0, []) // placeholder progression if needed

  return (
    <div className="flex flex-col gap-8">
      {/* Countdown */}
      <div className="flex items-center gap-3">
        <Clock className="h-5 w-5 text-brand" />
        <p className="text-sm">Registration closes in</p>
        <div className="flex items-center gap-2 font-mono">
          <TimeBlock v={d} label="D" />
          <TimeBlock v={h} label="H" />
          <TimeBlock v={m} label="M" />
          <TimeBlock v={s} label="S" />
        </div>
        <Badge className="bg-warm-1 text-foreground ml-auto">Don’t miss out</Badge>
      </div>

      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {EVENTS.map((e, i) => {
          const ActiveIcon = e.icon
          const active = i <= doneIndex
          return (
            <div key={e.title} className="relative p-4 rounded-md border bg-card">
              <div className="flex items-center gap-3">
                <span
                  className={`h-10 w-10 grid place-items-center rounded-full border ${active ? "bg-brand text-primary-foreground" : "bg-secondary/40"}`}
                >
                  <ActiveIcon className="h-5 w-5" />
                </span>
                <div className="font-medium">{e.title}</div>
              </div>
              <div className="mt-3 h-1 rounded bg-secondary/50 overflow-hidden">
                <div className={`h-full transition-all ${active ? "w-full bg-brand" : "w-0"}`} />
              </div>
              {/* connector line on desktop */}
              {i < EVENTS.length - 1 && (
                <div
                  className="hidden md:block absolute right-[-12px] top-1/2 -translate-y-1/2 w-6 h-0.5 bg-border"
                  aria-hidden
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function TimeBlock({ v, label }: { v: number; label: string }) {
  const val = v.toString().padStart(2, "0")
  return (
    <div className="grid grid-rows-[auto_auto] text-center">
      <div className="px-2 py-1 rounded bg-secondary/50 font-bold tracking-wider">{val}</div>
      <span className="text-[10px] text-muted-foreground mt-1">{label}</span>
    </div>
  )
}
