"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Organizer {
  id: string;
  name: string;
  role: string;
  organization: string;
  image: string;
  bio: string;
  expertise: string[];
}

// Sample data - you can easily modify this
const organizers: Organizer[] = [
  {
    id: "1",
    name: "Dr. Sample Name",
    role: "Event Director",
    organization: "TIET",
    image: "/placeholder-avatar.jpg",
    bio: "Leading expert in AI and Data Science with 15+ years of experience in academia and industry.",
    expertise: ["AI", "Machine Learning", "Data Science"]
  },
  {
    id: "2",
    name: "Prof. Sample Name",
    role: "Technical Lead",
    organization: "University of Queensland",
    image: "/placeholder-avatar.jpg",
    bio: "Renowned researcher in artificial intelligence and computer vision applications.",
    expertise: ["Computer Vision", "Deep Learning", "Research"]
  },
  {
    id: "3",
    name: "Dr. Sample Name",
    role: "Program Coordinator",
    organization: "TIET",
    image: "/placeholder-avatar.jpg",
    bio: "Expert in educational technology and student engagement programs.",
    expertise: ["EdTech", "Program Management", "Innovation"]
  },
  {
    id: "4",
    name: "Prof. Sample Name",
    role: "Industry Liaison",
    organization: "University of Queensland",
    image: "/placeholder-avatar.jpg",
    bio: "Bridging academia and industry with extensive experience in technology transfer.",
    expertise: ["Industry Relations", "Technology Transfer", "Innovation"]
  },
  {
    id: "5",
    name: "Dr. Sample Name",
    role: "Student Affairs",
    organization: "TIET",
    image: "/placeholder-avatar.jpg",
    bio: "Dedicated to student success and creating inclusive learning environments.",
    expertise: ["Student Affairs", "Mentorship", "Inclusion"]
  },
  {
    id: "6",
    name: "Prof. Sample Name",
    role: "Research Coordinator",
    organization: "University of Queensland",
    image: "/placeholder-avatar.jpg",
    bio: "Leading research initiatives in AI for social good and sustainable development.",
    expertise: ["Research", "Social Impact", "Sustainability"]
  },
  {
    id: "7",
    name: "Dr. Sample Name",
    role: "Operations Manager",
    organization: "TIET",
    image: "/placeholder-avatar.jpg",
    bio: "Ensuring smooth operations and logistics for large-scale academic events.",
    expertise: ["Operations", "Event Management", "Logistics"]
  }
];

export function Organizers() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Meet Our Organizers</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our dedicated team of faculty and staff from both institutions working together to make this event a success.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {organizers.map((organizer) => (
          <div
            key={organizer.id}
            className="relative group"
            onMouseEnter={() => setHoveredId(organizer.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Main Card */}
            <Card className="p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-blue-200">
              <div className="relative mb-3">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-blue-200"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(organizer.name)}&background=3b82f6&color=ffffff&size=64`;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {organizer.organization === 'TIET' ? 'T' : 'Q'}
                  </span>
                </div>
              </div>
              <h4 className="font-semibold text-sm mb-1 leading-tight">{organizer.name}</h4>
              <p className="text-xs text-blue-600 font-medium mb-2">{organizer.role}</p>
              <Badge variant="outline" className="text-xs">
                {organizer.organization}
              </Badge>
            </Card>

            {/* Hover Popup */}
            {hoveredId === organizer.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <Card className="p-4 w-64 bg-white border-blue-200 shadow-xl">
                  <div className="text-center mb-3">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-12 h-12 rounded-full mx-auto object-cover border-2 border-blue-200 mb-2"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(organizer.name)}&background=3b82f6&color=ffffff&size=48`;
                      }}
                    />
                    <h4 className="font-semibold text-sm">{organizer.name}</h4>
                    <p className="text-xs text-blue-600 font-medium">{organizer.role}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {organizer.organization}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {organizer.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {organizer.expertise.map((skill, index) => (
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