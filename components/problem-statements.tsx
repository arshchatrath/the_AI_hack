"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  IndianRupee,
  Accessibility,
  GraduationCap,
  Brain,
  Scale,
  Leaf,
  CircuitBoard,
  Lightbulb,
  Share2,
} from "lucide-react"

type Item = {
  title: string
  desc: string
  icon: React.ReactNode
  tags: string[]
}

const ITEMS: Item[] = [
  {
    title: "AI for Financial Literacy in Rural Communities",
    desc: "Deliver bite-sized, vernacular guidance via mobile for rural families.",
    icon: (
      <>
        <Smartphone className="h-5 w-5" />
        <IndianRupee className="h-5 w-5" />
      </>
    ),
    tags: ["NLP", "ASR", "Mobile"],
  },
  {
    title: "Multilingual & Multimodal Accessibility Tools",
    desc: "Universal access with speech, text, and vision models.",
    icon: <Accessibility className="h-6 w-6" />,
    tags: ["TTS", "OCR", "Vision"],
  },
  {
    title: "AI Tutors for Schools",
    desc: "Personalized learning companions for classrooms.",
    icon: (
      <>
        <GraduationCap className="h-5 w-5" />
        <Brain className="h-5 w-5" />
      </>
    ),
    tags: ["RAG", "LLMs", "EdTech"],
  },
  {
    title: "Bias-Free AI for Recruitment",
    desc: "Fair, explainable hiring assistants to reduce bias.",
    icon: <Scale className="h-6 w-6" />,
    tags: ["XAI", "Ethics", "HRTech"],
  },
  {
    title: "AI for Energy Saving",
    desc: "Smart recommendations to lower consumption.",
    icon: (
      <>
        <Leaf className="h-5 w-5" />
        <CircuitBoard className="h-5 w-5" />
      </>
    ),
    tags: ["Time-series", "IoT", "Forecasting"],
  },
  {
    title: "Open Challenge: AI for Inclusion",
    desc: "Pitch any high-impact idea advancing inclusion.",
    icon: (
      <>
        <Lightbulb className="h-5 w-5" />
        <Share2 className="h-5 w-5" />
      </>
    ),
    tags: ["Open", "Innovation"],
  },
]

export function ProblemStatements() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ITEMS.map((it, idx) => (
        <div key={idx} className="group perspective relative">
          <Card className="card-3d relative p-5 bg-card/90 border-foreground/10">
            {/* front */}
            <div className="card-face flex flex-col h-full justify-between">
              <div className="flex items-center gap-2 text-brand">{it.icon}</div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <Badge key={t} variant="outline" className="border-brand text-brand">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            {/* back */}
            <div className="card-back absolute inset-0 card-face p-5 flex flex-col justify-center bg-secondary/30 border">
              <p className="text-sm">
                Build with responsibility. Ensure data privacy, fairness, and accessibility are core to your solution.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Tip: Highlight real-world users and measurable impact.
              </p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
