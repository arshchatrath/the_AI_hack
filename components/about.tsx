"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Users, Award, Calendar } from "lucide-react";
export function About() {

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-shimmer">
            Participating Institutions
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto animate-fade-in-up">
            A prestigious collaboration between two world-class institutions, bringing together the best of Indian and Australian academia to foster innovation in AI for social good.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto perspective-1000">
          {/* Thapar Institute */}
          <div className="relative group animate-fade-in-up [animation-delay:200ms] hover:z-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <Card className="relative overflow-hidden h-96 border border-blue-500/20 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:shadow-xl group-hover:scale-[1.02] rounded-lg">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.2)), url('/thapar.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Thapar Institute of Engineering and Technology
                  </h3>
                  <p className="text-blue-200 mb-4 opacity-90">
                    Patiala, Punjab, India
                  </p>
                  <div className="flex items-center gap-2 text-sm text-blue-100 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <Calendar className="h-4 w-4 transform transition-transform duration-500 group-hover:scale-110" />
                    <span>Est. 1956</span>
                    <span className="mx-2">•</span>
                    <Award className="h-4 w-4 transform transition-transform duration-500 group-hover:scale-110" />
                    <span>NAAC A+</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-500 group-hover:translate-y-[-4px] relative overflow-hidden font-semibold"
                  onClick={() => window.open('https://www.thapar.edu', '_blank')}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </div>
            </Card>
          </div>

          {/* University of Queensland */}
          <div className="relative group animate-fade-in-up [animation-delay:400ms] hover:z-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <Card className="relative overflow-hidden h-96 border border-cyan-500/20 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] group-hover:scale-[1.02] rounded-lg">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(8, 145, 178, 0.2)), url('/queensland.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                    University of Queensland
                  </h3>
                  <p className="text-cyan-200 mb-4 opacity-90">
                    Brisbane, Queensland, Australia
                  </p>
                  <div className="flex items-center gap-2 text-sm text-cyan-100 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    <Calendar className="h-4 w-4 transform transition-transform duration-500 group-hover:scale-110" />
                    <span>Est. 1909</span>
                    <span className="mx-2">•</span>
                    <Award className="h-4 w-4 transform transition-transform duration-500 group-hover:scale-110" />
                    <span>Top 50 Global</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-500 group-hover:translate-y-[-4px] relative overflow-hidden font-semibold"
                  onClick={() => window.open('https://www.uq.edu.au', '_blank')}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
