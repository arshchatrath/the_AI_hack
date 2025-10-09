"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Code, 
  Presentation, 
  Award,
  Clock,
  FileText,
  Shield,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

export function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-blue-600">Hackathon Guidelines</h1>
              <p className="text-muted-foreground">AI for Inclusion Innovation Challenge 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Overview */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                Event Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The AI for Inclusion Innovation Challenge is a 24-hour hackathon focused on developing AI solutions 
                that promote inclusivity, accessibility, and social good. Participants will work in teams to create 
                innovative solutions addressing real-world challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">24 Hours</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">2-5 Members</div>
                  <div className="text-sm text-muted-foreground">Team Size</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold">₹1,75,000</div>
                  <div className="text-sm text-muted-foreground">Prize Pool</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eligibility */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Eligibility Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Who Can Participate?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Students from TIET and University of Queensland</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Undergraduate and postgraduate students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>PhD scholars and research students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Valid student ID required</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Team Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Teams of 2-5 members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Cross-institutional teams encouraged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>One team leader must be designated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>All members must register individually</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Rules */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                Important Rules & Restrictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-100 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Team Formation Rules</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Teams cannot be changed once registration is submitted</li>
                    <li>• One student can only participate in one team</li>
                    <li>• Only one submission allowed per team</li>
                    <li>• Late registrations will not be accepted</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Code of Conduct</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Respectful behavior towards all participants</li>
                      <li>• No harassment or discrimination</li>
                      <li>• Professional communication at all times</li>
                      <li>• Follow organizer instructions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Requirements</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Original code developed during hackathon</li>
                      <li>• Open source libraries are allowed</li>
                      <li>• No pre-built solutions</li>
                      <li>• Proper attribution required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submission Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Required Deliverables</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Code className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium">Source Code</div>
                          <div className="text-sm text-muted-foreground">
                            Complete, well-documented code with README
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Presentation className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium">Presentation</div>
                          <div className="text-sm text-muted-foreground">
                            5-minute pitch deck (max 10 slides)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium">Demo Video</div>
                          <div className="text-sm text-muted-foreground">
                            2-3 minute working demonstration
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="font-medium">Documentation</div>
                          <div className="text-sm text-muted-foreground">
                            Technical documentation and user guide
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Submission Format</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• GitHub repository with public access</li>
                    <li>• All files must be uploaded before deadline</li>
                    <li>• Include team member details in README</li>
                    <li>• Provide clear installation instructions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evaluation Criteria */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Evaluation Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Innovation & Creativity</span>
                    <Badge variant="secondary">25%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Technical Implementation</span>
                    <Badge variant="secondary">25%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Social Impact</span>
                    <Badge variant="secondary">25%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Presentation Quality</span>
                    <Badge variant="secondary">25%</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Judging Process</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Initial screening by technical panel</li>
                    <li>• Top 10 teams selected for final presentation</li>
                    <li>• 5-minute pitch + 3-minute Q&A</li>
                    <li>• Live demo required during presentation</li>
                    <li>• Judges panel includes industry experts</li>
                    <li>• Results announced within 2 hours</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Resources & Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold mb-2">Technical Mentors</div>
                  <div className="text-sm text-muted-foreground">
                    Available throughout the event for guidance
                  </div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold mb-2">API Access</div>
                  <div className="text-sm text-muted-foreground">
                    Free credits for cloud services and APIs
                  </div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold mb-2">Workshops</div>
                  <div className="text-sm text-muted-foreground">
                    AI/ML workshops during the event
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>
                Contact our support team for any questions or clarifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/#contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Back to Registration</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
