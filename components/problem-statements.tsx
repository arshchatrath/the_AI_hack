"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Heart,
  Sprout,
  GraduationCap,
  CreditCard,
  Building2,
  Lightbulb,
  ChevronRight,
  TrendingUp,
} from "lucide-react"

type Item = {
  id: string
  title: string
  desc: string
  detailedDesc: string
  icon: React.ReactNode
  tags: string[]
  examples: string[]
  impact: string
  teamSize: string
  features: string[]
}

const ITEMS: Item[] = [
  {
    id: "financial-literacy",
    title: "AI for Financial Literacy to Rural People",
    desc: "Enhance socio-economic development for rural India through AI-powered financial education solutions.",
    detailedDesc: "Create innovative AI solutions to bridge the financial literacy gap in rural India. Focus on developing conversational AI systems that can educate and guide rural populations about financial services in their local languages.",
    icon: <CreditCard className="h-6 w-6" />,
    tags: ["NLP", "Local Languages", "Chatbots", "Financial Education"],
    examples: [
      "Multilingual financial literacy chatbots",
      "Voice-based financial advisory systems",
      "Interactive financial education modules",
      "Personalized financial planning assistants"
    ],
    features: [
      "Support for multiple Indian languages",
      "Voice and text-based interactions",
      "Offline content accessibility",
      "Cultural context awareness"
    ],
    impact: "Empower millions of rural Indians with financial knowledge",
    teamSize: "3-4 members"
  },
  {
    id: "accessibility",
    title: "Multilingual and Multimodal Accessibility Tools",
    desc: "Develop tools to bridge language and sensory gaps, making technology accessible to people with diverse abilities.",
    detailedDesc: "Create innovative accessibility solutions that break down barriers in communication and technology use. Focus on real-time translation and conversion tools that enable inclusive access to digital content.",
    icon: <GraduationCap className="h-6 w-6" />,
    tags: ["Accessibility", "Sign Language", "Braille", "Real-time Translation"],
    examples: [
      "Real-time sign language translation",
      "Braille conversion systems",
      "Multi-modal content adapters",
      "Assistive reading technologies"
    ],
    features: [
      "Real-time processing capabilities",
      "Multi-device compatibility",
      "Customizable output formats",
      "Low-latency performance"
    ],
    impact: "Enable technology access for millions with diverse abilities",
    teamSize: "4-5 members"
  },
  {
    id: "ai-tutors",
    title: "AI Tutors for Schools",
    desc: "Create intelligent tutoring systems to support education in schools with limited teaching resources.",
    detailedDesc: "Develop AI-powered tutoring systems that can provide personalized learning support to students in resource-constrained schools, helping bridge the education gap through technology.",
    icon: <GraduationCap className="h-6 w-6" />,
    tags: ["EdTech", "Personalized Learning", "Conversational AI", "Education Analytics"],
    examples: [
      "Personalized homework assistance",
      "Adaptive lesson planning",
      "Interactive doubt resolution",
      "Progress tracking systems"
    ],
    features: [
      "Personalized learning paths",
      "Multi-subject support",
      "Performance analytics",
      "Offline learning capabilities"
    ],
    impact: "Support millions of students in underserved schools",
    teamSize: "3-5 members"
  },
  {
    id: "recruitment",
    title: "Bias-Free AI for Recruitment",
    desc: "Develop AI solutions to ensure fair and equitable hiring processes for all candidates.",
    detailedDesc: "Create AI systems that can eliminate unconscious bias from recruitment processes, ensuring equal opportunities for all candidates regardless of their background, gender, or other demographic factors.",
    icon: <Building2 className="h-6 w-6" />,
    tags: ["HR Tech", "Bias Detection", "Fair AI", "Recruitment"],
    examples: [
      "Bias-free resume screening",
      "Objective skill assessment tools",
      "Fair interview analysis systems",
      "Inclusive job description generators"
    ],
    features: [
      "Bias detection algorithms",
      "Transparent decision making",
      "Diversity metrics tracking",
      "Compliance reporting"
    ],
    impact: "Create equal opportunities in employment for all",
    teamSize: "4-5 members"
  },
  {
    id: "energy",
    title: "AI for Energy Saving",
    desc: "Design AI solutions to analyze and optimize building energy consumption patterns.",
    detailedDesc: "Develop intelligent systems that can analyze data from smart meters and provide actionable recommendations for reducing energy consumption in buildings, promoting sustainability and cost savings.",
    icon: <Lightbulb className="h-6 w-6" />,
    tags: ["Energy Analytics", "IoT", "Smart Buildings", "Sustainability"],
    examples: [
      "Smart meter data analysis",
      "Energy consumption forecasting",
      "Automated efficiency recommendations",
      "Real-time usage monitoring"
    ],
    features: [
      "Real-time monitoring",
      "Predictive analytics",
      "Personalized recommendations",
      "Cost-saving calculations"
    ],
    impact: "Reduce energy consumption and promote sustainability",
    teamSize: "3-4 members"
  },
  {
    id: "open",
    title: "Open Challenge: AI for Inclusion",
    desc: "Propose innovative AI solutions to promote inclusion and accessibility in any domain.",
    detailedDesc: "Create novel AI applications that address inclusion challenges in society. This track welcomes creative solutions that can make technology, services, or opportunities more accessible to underserved populations.",
    icon: <Heart className="h-6 w-6" />,
    tags: ["Innovation", "Social Impact", "Inclusion", "Accessibility"],
    examples: [
      "Inclusive technology solutions",
      "Accessibility enhancement tools",
      "Social integration platforms",
      "Adaptive assistance systems"
    ],
    features: [
      "User-centric design",
      "Inclusive architecture",
      "Scalable implementation",
      "Impact measurement"
    ],
    impact: "Create a more inclusive and accessible society",
    teamSize: "2-5 members"
  },
]

export function ProblemStatements() {
  const [open, setOpen] = React.useState<string | null>(null)

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-muted-foreground text-lg">
          Select a problem statement that aligns with your passion and expertise. Each track offers unique challenges and opportunities to create meaningful impact.
        </p>
      </div>

      {/* Problem Statements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <React.Fragment key={item.id}>
            <Card 
              className="group relative p-6 transition-all duration-300 hover:shadow-xl cursor-pointer border-2 hover:border-blue-300 hover:bg-blue-50/30"
              onClick={() => setOpen(item.id)}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <ChevronRight className="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{item.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs bg-white/50 transition-colors group-hover:border-blue-300 group-hover:text-blue-700">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-white/50">
                      +{item.tags.length - 3} more
                    </Badge>
                  )}
                </div>


              </div>
            </Card>

            <Dialog open={open === item.id} onOpenChange={(isOpen) => !isOpen && setOpen(null)}>
              <DialogContent className="max-h-[80vh] overflow-y-auto backdrop-blur-sm bg-white/95">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {item.icon}
                    </div>
                    <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                  </div>
                  <DialogDescription>{item.detailedDesc}</DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Example Solutions:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {item.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Impact: {item.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-blue-200 text-blue-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </React.Fragment>
        ))}
      </div>      
    </div>
  )
}