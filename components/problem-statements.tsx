"use client";

import React from "react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Sprout,
  GraduationCap,
  CreditCard,
  Building2,
  Lightbulb,
  Share2,
} from "lucide-react";

type Item = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  tags: string[];
  id: string;
  detailedDesc: string;
  teamSize: string;
  impact: string;
  difficulty: string;
  features: string[];
  examples: string[];
};

const ITEMS: Item[] = [
  {
    id: "healthcare",
    title: "AI for Healthcare & Wellness",
    desc: "Develop AI solutions for early disease detection, telemedicine, mental health support, or healthcare accessibility in rural areas.",
    detailedDesc:
      "Create innovative AI-powered healthcare solutions that can bridge the gap between urban and rural healthcare access. Focus on preventive care, early diagnosis, and mental health support systems that can work with limited infrastructure.",
    icon: <Heart className="h-6 w-6" />,
    tags: ["Computer Vision", "NLP", "Predictive Analytics", "Telemedicine"],
    examples: [
      "AI-powered diagnostic tools for rural clinics",
      "Mental health chatbots in local languages",
      "Predictive models for disease outbreaks",
      "Wearable health monitoring systems",
    ],
    features: [
      "Multi-language support for rural areas",
      "Offline functionality for low connectivity",
      "Integration with existing healthcare systems",
      "Privacy-compliant data handling",
    ],
    impact: "Improve healthcare access for 70% of India's rural population",
    difficulty: "Intermediate",
    teamSize: "3-5 members",
  },
  {
    id: "agriculture",
    title: "Smart Agriculture & Food Security",
    desc: "Create AI-powered solutions for crop monitoring, yield prediction, pest detection, or sustainable farming practices.",
    detailedDesc:
      "Develop cutting-edge agricultural technologies that help farmers increase productivity while maintaining sustainability. Focus on precision farming, resource optimization, and climate-resilient agriculture.",
    icon: <Sprout className="h-6 w-6" />,
    tags: ["IoT", "Satellite Imagery", "ML", "Precision Farming"],
    examples: [
      "Drone-based crop health monitoring",
      "AI-powered pest and disease detection",
      "Smart irrigation systems",
      "Market price prediction models",
    ],
    features: [
      "Real-time crop monitoring",
      "Weather-based recommendations",
      "Market price integration",
      "Sustainable farming practices",
    ],
    impact: "Support 600+ million farmers across India",
    difficulty: "Advanced",
    teamSize: "4-5 members",
  },
  {
    id: "education",
    title: "Education & Skill Development",
    desc: "Build personalized learning platforms, skill assessment tools, or AI tutors for quality education access across India.",
    detailedDesc:
      "Create adaptive learning systems that can personalize education for diverse learning styles and backgrounds. Focus on bridging the digital divide and making quality education accessible to all.",
    icon: <GraduationCap className="h-6 w-6" />,
    tags: ["EdTech", "LLMs", "Adaptive Learning", "Accessibility"],
    examples: [
      "Personalized AI tutoring systems",
      "Skill gap analysis tools",
      "Multilingual learning platforms",
      "Virtual lab simulations",
    ],
    features: [
      "Adaptive learning paths",
      "Progress tracking and analytics",
      "Multi-modal content delivery",
      "Gamification elements",
    ],
    impact: "Enhance learning for 250+ million students",
    difficulty: "Intermediate",
    teamSize: "3-4 members",
  },
  {
    id: "fintech",
    title: "Financial Inclusion & Fintech",
    desc: "Develop AI solutions for credit scoring, fraud detection, financial literacy, or inclusive banking services.",
    detailedDesc:
      "Build financial technologies that can bring banking and financial services to the unbanked population. Focus on alternative credit scoring, fraud prevention, and financial education.",
    icon: <CreditCard className="h-6 w-6" />,
    tags: ["Risk Assessment", "NLP", "Blockchain", "Financial Modeling"],
    examples: [
      "Alternative credit scoring for rural populations",
      "AI-powered fraud detection systems",
      "Financial literacy chatbots",
      "Micro-lending platforms",
    ],
    features: [
      "Alternative data sources for credit scoring",
      "Real-time fraud detection",
      "Financial education modules",
      "Mobile-first design",
    ],
    impact: "Include 190+ million unbanked Indians",
    difficulty: "Advanced",
    teamSize: "4-5 members",
  },
  {
    id: "governance",
    title: "Governance & Public Services",
    desc: "Create AI tools for citizen services, policy analysis, transparency, or efficient government service delivery.",
    detailedDesc:
      "Develop solutions that can make government services more efficient, transparent, and citizen-friendly. Focus on reducing bureaucracy, improving service delivery, and enhancing transparency.",
    icon: <Building2 className="h-6 w-6" />,
    tags: ["Data Analytics", "Automation", "Transparency", "NLP"],
    examples: [
      "Automated document processing systems",
      "Citizen grievance resolution platforms",
      "Policy impact analysis tools",
      "Transparent procurement systems",
    ],
    features: [
      "Multi-language citizen interfaces",
      "Automated workflow processing",
      "Transparency dashboards",
      "Mobile accessibility",
    ],
    impact: "Serve 1.4+ billion citizens more efficiently",
    difficulty: "Intermediate",
    teamSize: "3-5 members",
  },
  {
    id: "open",
    title: "Open Innovation Track",
    desc: "Propose any AI solution addressing critical challenges in Indian society, economy, or governance.",
    detailedDesc:
      "Think outside the box and propose innovative AI solutions for any pressing challenge in India. This track encourages creative thinking and novel approaches to societal problems.",
    icon: <Lightbulb className="h-6 w-6" />,
    tags: ["Innovation", "Social Impact", "Creative Thinking", "Open"],
    examples: [
      "Climate change mitigation tools",
      "Urban planning optimization",
      "Disaster management systems",
      "Cultural preservation platforms",
    ],
    features: [
      "Creative problem-solving approach",
      "Novel AI applications",
      "Social impact focus",
      "Scalable solutions",
    ],
    impact: "Address any critical societal challenge",
    difficulty: "Beginner",
    teamSize: "2-5 members",
  },
];

export function ProblemStatements() {
  const [open, setOpen] = React.useState<string | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {ITEMS.map((it, idx) => (
        <div key={idx} className="group perspective relative">
          <Card className="card-3d relative p-5 bg-card/90 border-foreground/10">
            {/* front */}
            <div className="card-face flex flex-col h-full justify-between">
              <div className="flex items-center gap-2 text-brand">
                {it.icon}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-brand text-brand"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            {/* back */}
            <div className="card-back absolute inset-0 card-face p-5 flex flex-col justify-center bg-secondary/30 border">
              <p className="text-sm">
                Build with responsibility. Ensure data privacy, fairness, and
                accessibility are core to your solution.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Tip: Highlight real-world users and measurable impact.
              </p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
