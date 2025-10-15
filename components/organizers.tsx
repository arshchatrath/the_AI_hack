"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Organizer {
  id: string;
  name: string;
  role: string;

  image: string;
}

// Sample data - you can easily modify this
const organizers: Organizer[] = [
  {
    id: "1",
    name: "Dr. Inderveer Chana",
    role: "Center Director | Professor and Associate Head",
    image: "/dr_channaM.png",
  },
  {
    id: "2",
    name: "Dr. Tim Miller",
    role: "Center Director | Professor",

    image: "/tim.png",
  },
  {
    id: "3",
    name: "Dr. Maninder Singh",
    role: "Professor",

    image: "/manminder (2).jpg",
  },
  {
    id: "4",
    name: "Dr. Anju Bala",
    role: "Education and Training Coordinator | Associate Professor",

    image: "/anju_bala_mam.png",
  },
  {
    id: "5",
    name: "Dr. Sachin Kansal",
    role: "Research and Innovation Coordinator | Assistant Professor",

    image: "/sachin_sir.jpg",
  },
  {
    id: "6",
    name: "Dr. Harpreet Singh",
    role: "Assistant Professor",

    image: "/harpreet_sir.jpeg",
  },

  {
    id: "7",
    name: "Dr. Amrita Kaur",
    role: "Assistant Professor",

    image: "/harpreet_mam (1).jpg",
  },

  {
    id: "8",
    name: "Dr. Maggi Bansal",
    role: "Assistant Professor",

    image: "/maggi.jpeg",
  },
];
// {
//   id: "7",
//   name: "Dr. Sample Name",
//   role: "Operations Manager",
//   organization: "TIET",
//   image: "/placeholder-avatar.jpg",
//   bio: "Ensuring smooth operations and logistics for large-scale academic events.",
//   expertise: ["Operations", "Event Management", "Logistics"]
// }

export function Organizers() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Meet Our Organizers</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our dedicated team of faculty and staff from both institutions working
          together to make this event a success.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {organizers.map((organizer) => (
          <div
            key={organizer.id}
            className="relative group"
            onMouseEnter={() => setHoveredId(organizer.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Main Card */}
            <Card className="p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 min-h-[300px] cursor-pointer border-blue-200">
              <div className="relative mb-3">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-blue-200"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      organizer.name
                    )}&background=3b82f6&color=ffffff&size=64`;
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  {/* <span className="text-white text-xs font-bold">
                    {organizer.organization === "TIET" ? "T" : "Q"}
                  </span> */}
                </div>
              </div>
              <h4 className="font-semibold text-md mb-1 leading-tight">
                {organizer.name}
              </h4>
              <p className="text-xs text-blue-600 font-medium mb-2">
                {organizer.role}
              </p>
              {/* <Badge variant="outline" className="text-xs">
                {organizer.organization}
              </Badge> */}
            </Card>

            {/* Hover Popup */}
            {hoveredId === organizer.id && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <Card className="p-4 w-64 bg-white border-blue-200 shadow-xl">
                  <div className="text-center mb-3">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      height={12}
                      width={12}
                      className="w-12 h-12 rounded-full mx-auto object-cover border-2 border-blue-200 mb-2"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          organizer.name
                        )}&background=3b82f6&color=ffffff&size=48`;
                      }}
                    />
                    <h4 className="font-semibold text-sm">{organizer.name}</h4>
                    <p className="text-xs text-blue-600 font-medium">
                      {organizer.role}
                    </p>
                    {/* <Badge variant="outline" className="text-xs mt-1">
                      {organizer.organization}
                    </Badge> */}
                  </div>
                  {/* <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {organizer.bio}
                  </p> */}
                  <div className="flex flex-wrap gap-1">
                    {/* {organizer.expertise.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))} */}
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
