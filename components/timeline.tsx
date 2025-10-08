"use client"

import { useState } from "react"
import { Calendar, Users, Presentation, Trophy, Clock, Globe, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const INDIA_EVENTS = [
  { 
    title: "Mail for Floating Problem Statements to students", 
    icon: Calendar, 
    date: "06 October 2025",
    description: "Problem statements will be shared with all registered students"
  },
  { 
    title: "PPT Submission Deadline", 
    icon: Presentation, 
    date: "20 November 2025",
    description: "Teams must submit their initial presentation and approach"
  },
  { 
    title: "Shortlisting Phase I", 
    icon: Users, 
    date: "01 December 2025",
    description: "First round of team selection based on submissions"
  },
  { 
    title: "Online Pitching", 
    icon: Presentation, 
    date: "23 December 2025",
    description: "Selected teams present their solutions online"
  },
  { 
    title: "Results Announcement", 
    icon: Trophy, 
    date: "07 January 2026",
    description: "Winners will be announced for both tracks"
  },
  { 
    title: "AI Hands-On Workshop", 
    icon: Users, 
    date: "17 January 2026",
    description: "Practical AI workshop for all participants"
  },
  { 
    title: "Innovation Challenge", 
    icon: Trophy, 
    date: "17-18 January 2026",
    description: "Final 24-hour hackathon event"
  }
]

const UQ_EVENTS = [
  { 
    title: "Mail for Floating Problem Statements to students", 
    icon: Calendar, 
    date: "06 October 2025",
    description: "Problem statements will be shared with all registered students"
  },
  { 
    title: "PPT Submission Deadline", 
    icon: Presentation, 
    date: "05 December 2025",
    description: "Teams must submit their initial presentation and approach"
  },
  { 
    title: "Shortlisting Phase I", 
    icon: Users, 
    date: "10 December 2025",
    description: "First round of team selection based on submissions"
  },
  { 
    title: "Online Pitching", 
    icon: Presentation, 
    date: "04 January 2026",
    description: "Selected teams present their solutions online"
  },
  { 
    title: "Results Announcement", 
    icon: Trophy, 
    date: "07 January 2026",
    description: "Winners will be announced for both tracks"
  },
  { 
    title: "AI Hands-On Workshop", 
    icon: Users, 
    date: "17 January 2026",
    description: "Practical AI workshop for all participants"
  },
  { 
    title: "Innovation Challenge", 
    icon: Trophy, 
    date: "17-18 January 2026",
    description: "Final 24-hour hackathon event"
  }
]

export function Timeline() {
  const [selectedTrack, setSelectedTrack] = useState<'india' | 'uq'>('india')

  const currentEvents = selectedTrack === 'india' ? INDIA_EVENTS : UQ_EVENTS

  return (
    <div className="space-y-8">
      {/* Track Selector */}
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Event Timeline</h3>
          <p className="text-muted-foreground">
            Select your region to view the specific timeline for your participation
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button
            variant={selectedTrack === 'india' ? 'default' : 'outline'}
            onClick={() => setSelectedTrack('india')}
            className="flex items-center gap-2"
          >
            <MapPin className="h-4 w-4" />
            India (TIET)
          </Button>
          <Button
            variant={selectedTrack === 'uq' ? 'default' : 'outline'}
            onClick={() => setSelectedTrack('uq')}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            Australia (UQ)
          </Button>
        </div>
      </div>

      {/* Timeline Display */}
      <div className="max-w-4xl mx-auto">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {selectedTrack === 'india' ? (
                <>
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Timeline for India (TIET Students)
                </>
              ) : (
                <>
                  <Globe className="h-5 w-5 text-blue-600" />
                  Timeline for Australia (UQ Students)
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {currentEvents.map((event, index) => {
                const IconComponent = event.icon
                const isCompleted = false // You can add logic to determine if event is completed
                const isCurrent = index === 0 // You can add logic to determine current event
                
                return (
                  <div key={index} className="relative flex gap-4">
                    {/* Timeline Line */}
                    {index < currentEvents.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-blue-200" />
                    )}
                    
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                      isCompleted 
                        ? 'bg-green-100 border-green-500 text-green-600'
                        : isCurrent
                        ? 'bg-blue-100 border-blue-500 text-blue-600'
                        : 'bg-gray-100 border-gray-300 text-gray-500'
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-lg">{event.title}</h4>
                        <Badge variant={isCurrent ? 'default' : 'secondary'} className="text-xs">
                          {event.date}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>      
    </div>
  )
}