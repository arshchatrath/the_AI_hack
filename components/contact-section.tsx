"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 id="contact-title" className="text-3xl md:text-4xl font-semibold text-pretty mb-8">
          Contact & FAQ
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">inclusion-hackathon@example.org</div>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-medium">SPOC</div>
                  <div className="text-sm text-muted-foreground">+91-98765-43210</div>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">Hybrid • Online + Onsite</div>
                </div>
              </div>
              <div className="mt-3 overflow-hidden rounded-md">
                <img src="/map-abstract-grid.jpg" alt="Map placeholder" className="w-full h-auto" />
              </div>
            </Card>
          </div>

          <Card className="p-6 lg:col-span-2">
            <h3 className="font-semibold mb-3">Quick Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thanks for reaching out! We’ll get back to you soon.")
              }}
              className="grid gap-3"
            >
              <input
                className="h-10 rounded-md border bg-background px-3"
                placeholder="Your email"
                aria-label="Your email"
                required
              />
              <textarea
                className="min-h-28 rounded-md border bg-background p-3"
                placeholder="Message"
                aria-label="Message"
                required
              />
              <Button className="bg-brand text-primary-foreground hover:bg-brand/90">Send</Button>
            </form>

            <div className="mt-8">
              <h4 className="font-semibold mb-2">FAQ</h4>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="a1">
                  <AccordionTrigger>Who can participate?</AccordionTrigger>
                  <AccordionContent>
                    Students and professionals from anywhere in the world are welcome.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a2">
                  <AccordionTrigger>Is it free?</AccordionTrigger>
                  <AccordionContent>Yes, participation is free. Some onsite perks may be limited.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="a3">
                  <AccordionTrigger>Team size?</AccordionTrigger>
                  <AccordionContent>Teams of 1-5 participants are allowed.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
