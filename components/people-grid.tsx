"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useMemo, useState } from "react"

type Person = { name: string; title: string; org?: string; img: string; tags?: string[] }

const ORGS: Person[] = [
  {
    name: "Anita Sharma",
    title: "Lead Organizer",
    org: "Inclusive AI Lab",
    img: "/placeholder-user.jpg",
    tags: ["Diversity", "Outreach"],
  },
  { name: "Rahul Verma", title: "Co-Organizer", org: "Tech4Good", img: "/placeholder-user.jpg", tags: ["Operations"] },
  {
    name: "Li Wei",
    title: "Program Manager",
    org: "Global AI Network",
    img: "/placeholder-user.jpg",
    tags: ["Logistics"],
  },
  {
    name: "Sara Khan",
    title: "Community Lead",
    org: "Open Education",
    img: "/placeholder-user.jpg",
    tags: ["Community"],
  },
]

const JUDGES: Person[] = [
  {
    name: "Dr. Meera Iyer",
    title: "AI/ML Expert",
    org: "University of Innovation",
    img: "/placeholder-user.jpg",
    tags: ["AI/ML"],
  },
  {
    name: "Carlos Alvarez",
    title: "Healthcare Innovator",
    org: "CareBridge",
    img: "/placeholder-user.jpg",
    tags: ["Healthcare"],
  },
  { name: "Priya N.", title: "EdTech Founder", org: "LearnNext", img: "/placeholder-user.jpg", tags: ["Education"] },
  {
    name: "Amina Okafor",
    title: "Social Impact Strategist",
    org: "ImpactHub",
    img: "/placeholder-user.jpg",
    tags: ["Social Impact"],
  },
]

const FILTERS = ["All", "AI/ML", "Healthcare", "Education", "Social Impact"]

export function PeopleGrid({ variant }: { variant: "organizers" | "judges" }) {
  const [filter, setFilter] = useState("All")
  const data = variant === "organizers" ? ORGS : JUDGES
  const filtered = useMemo(
    () => (filter === "All" ? data : data.filter((p) => p.tags?.includes(filter))),
    [data, filter],
  )

  return (
    <div className="space-y-6">
      {variant === "judges" && (
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={f === filter ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className={f === filter ? "bg-brand hover:bg-brand/90" : ""}
            >
              {f}
            </Button>
          ))}
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <Card key={p.name} className="overflow-hidden">
            <div className="aspect-[4/3] bg-secondary/40" role="img" aria-label={`${p.name} portrait`}>
              <img src="/organizer-portrait.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-muted-foreground">
                {p.title}
                {p.org ? ` • ${p.org}` : ""}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {(p.tags || []).map((t) => (
                  <Badge key={t} variant="outline" className="border-warm-2 text-warm-2">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
      {variant === "organizers" && (
        <div className="flex items-center gap-4">
          <img src="/placeholder-logo.svg" alt="Institution logo" className="h-8 w-auto opacity-80" />
          <img src="/placeholder-logo.svg" alt="Institution logo" className="h-8 w-auto opacity-80" />
          <img src="/placeholder-logo.svg" alt="Institution logo" className="h-8 w-auto opacity-80" />
        </div>
      )}
    </div>
  )
}
