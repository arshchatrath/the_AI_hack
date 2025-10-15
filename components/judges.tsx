"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Judge {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  bio: string;
  expertise: string[];
  experience: string;
}

// Sample data - you can easily modify this
const judges: Judge[] = [
  {
    id: "1",
    name: "Dr. Sample Judge",
    title: "Chief AI Officer",
    company: "Tech Corp",
    image: "/placeholder-avatar.jpg",
    bio: "Leading AI researcher and industry expert with 20+ years of experience in developing cutting-edge AI solutions for social impact.",
    expertise: ["AI Strategy", "Machine Learning", "Social Impact"],
    experience: "20+ years"
  },
  {
    id: "2",
    name: "Prof. Sample Judge",
    title: "Director of Innovation",
    company: "Innovation Labs",
    image: "/placeholder-avatar.jpg",
    bio: "Renowned expert in innovation management and technology commercialization with extensive startup experience.",
    expertise: ["Innovation", "Startups", "Technology Transfer"],
    experience: "15+ years"
  },
  {
    id: "3",
    name: "Dr. Sample Judge",
    title: "Senior Data Scientist",
    company: "Data Solutions Inc",
    image: "/placeholder-avatar.jpg",
    bio: "Expert in data science and analytics with focus on healthcare and social good applications.",
    expertise: ["Data Science", "Healthcare AI", "Analytics"],
    experience: "12+ years"
  },
  {
    id: "4",
    name: "Ms. Sample Judge",
    title: "Product Manager",
    company: "AI Innovations",
    image: "/placeholder-avatar.jpg",
    bio: "Product management expert specializing in AI-powered products and user experience design.",
    expertise: ["Product Management", "UX Design", "AI Products"],
    experience: "10+ years"
  },
  {
    id: "5",
    name: "Dr. Sample Judge",
    title: "Research Director",
    company: "Research Institute",
    image: "/placeholder-avatar.jpg",
    bio: "Leading researcher in computer vision and natural language processing with numerous publications.",
    expertise: ["Computer Vision", "NLP", "Research"],
    experience: "18+ years"
  },
  {
    id: "6",
    name: "Mr. Sample Judge",
    title: "Tech Entrepreneur",
    company: "Startup Ventures",
    image: "/placeholder-avatar.jpg",
    bio: "Serial entrepreneur with multiple successful AI startups focused on social impact and sustainability.",
    expertise: ["Entrepreneurship", "AI Startups", "Sustainability"],
    experience: "14+ years"
  },
  {
    id: "7",
    name: "Prof. Sample Judge",
    title: "Department Head",
    company: "University Research",
    image: "/placeholder-avatar.jpg",
    bio: "Academic leader in AI ethics and responsible AI development with global recognition.",
    expertise: ["AI Ethics", "Responsible AI", "Academic Leadership"],
    experience: "22+ years"
  }
];

export function Judges() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Expert Judges Panel</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our distinguished panel of judges brings together industry leaders, researchers, and innovators to evaluate your solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {judges.map((judge) => (
          <div
            key={judge.id}
            className="relative group"
            onMouseEnter={() => setHoveredId(judge.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Main Card */}
            <Card className="p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-purple-200">
              <div className="relative mb-3">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-purple-200"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(judge.name)}&background=8b5cf6&color=ffffff&size=64`;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">⭐</span>
                </div>
              </div>
              <h4 className="font-semibold text-sm mb-1 leading-tight">{judge.name}</h4>
              <p className="text-xs text-purple-600 font-medium mb-2">{judge.title}</p>
              <Badge variant="outline" className="text-xs border-purple-200 text-purple-700">
                {judge.company}
              </Badge>
            </Card>

            {/* Hover Popup */}
            {hoveredId === judge.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <Card className="p-4 w-64 bg-white border-purple-200 shadow-xl">
                  <div className="text-center mb-3">
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-12 h-12 rounded-full mx-auto object-cover border-2 border-purple-200 mb-2"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(judge.name)}&background=8b5cf6&color=ffffff&size=48`;
                      }}
                    />
                    <h4 className="font-semibold text-sm">{judge.name}</h4>
                    <p className="text-xs text-purple-600 font-medium">{judge.title}</p>
                    <Badge variant="outline" className="text-xs mt-1 border-purple-200 text-purple-700">
                      {judge.company}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{judge.experience} experience</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {judge.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {judge.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </Card>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
