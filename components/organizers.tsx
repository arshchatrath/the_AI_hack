"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
            className="group relative transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 blur transition duration-500 group-hover:opacity-30"></div>
            <Card className="relative p-4 text-center bg-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl min-h-[300px] border-blue-200/50">
              <div className="mb-3 transform transition-all duration-500 group-hover:scale-105">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-blue-200/50 shadow-md transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-blue-200/50"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      organizer.name
                    )}&background=3b82f6&color=ffffff&size=64`;
                  }}
                />
              </div>
              <h4 className="font-semibold text-md mb-2 leading-tight transition-all duration-500 group-hover:text-blue-600">
                {organizer.name}
              </h4>
              <p className="text-xs text-blue-600/80 font-medium transition-all duration-500 group-hover:text-blue-700">
                {organizer.role}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
