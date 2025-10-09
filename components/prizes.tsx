"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Gift } from "lucide-react";

const prizes = [
  {
    position: "1st Place (2 Teams)",
    amount: "₹40,000",
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    description: "Winners of IndiaAI Impact Hackathon",
    benefits: ["Cash Prize per team", "Mentorship Program", "Incubation Support", "Industry Recognition"]
  },
  {
    position: "2nd Place (2 Teams)", 
    amount: "₹25,000",
    icon: Medal,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    description: "Runner-up Teams",
    benefits: ["Cash Prize per team", "Mentorship Program", "Industry Recognition", "Networking Opportunities"]
  },
  {
    position: "3rd Place (3 Teams)",
    amount: "₹15,000",
    icon: Award,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "Second Runner-up Teams",
    benefits: ["Cash Prize per team", "Industry Recognition", "Networking Opportunities", "Certificate"]
  },
];

export function Prizes() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Main Prizes */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-8">Prizes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <Card key={index} className={`${prize.borderColor} border-2 ${prize.bgColor} relative overflow-hidden`}>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full ${prize.bgColor} border-2 ${prize.borderColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${prize.color}`} />
                  </div>
                  <CardTitle className="text-xl">{prize.position}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-foreground">
                    {prize.amount}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">{prize.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {prize.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${prize.color.replace('text-', 'bg-')}`} />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Additional Benefits */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-orange-600">Additional Benefits for All Participants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-lg font-semibold">Certificate</div>
              <div className="text-sm text-muted-foreground">Official participation certificate</div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold">Networking</div>
              <div className="text-sm text-muted-foreground">Connect with industry experts</div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold">Learning</div>
              <div className="text-sm text-muted-foreground">Workshops and mentorship sessions</div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-semibold">Opportunities</div>
              <div className="text-sm text-muted-foreground">Job and internship opportunities</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
