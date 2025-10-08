"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-16 md:py-24 bg-secondary/10"
    >
      <div className="container mx-auto px-4">
        <h2
          id="contact-title"
          className="text-3xl md:text-4xl font-semibold text-pretty mb-8"
        >
          Contact & FAQ
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6">
            <Card className="flex-1 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">
                    inclusion-hackathon@example.org
                  </div>
                </div>
              </div>
            </Card>
            <Card className="flex-1 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-medium">SPOC</div>
                  <div className="text-sm text-muted-foreground">
                    +91-98765-43210
                  </div>
                </div>
              </div>
            </Card>
            <Card className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">
                      Hybrid • Online + Onsite
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 overflow-hidden rounded-md">
                <img
                  src="/map-abstract-grid.jpg"
                  alt="Map placeholder"
                  className="w-full h-28 object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Message & FAQ */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Card className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold mb-4 text-xl">Quick Message</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "Thanks for reaching out! We’ll get back to you soon."
                    );
                  }}
                  className="grid gap-4"
                >
                  <input
                    className="h-12 rounded-md border bg-background px-4"
                    placeholder="Your email"
                    aria-label="Your email"
                    required
                  />
                  <textarea
                    className="min-h-32 rounded-md border bg-background p-4"
                    placeholder="Message"
                    aria-label="Message"
                    required
                  />
                  <Button className="bg-brand text-primary-foreground hover:bg-brand/90 w-full mt-2">
                    Send
                  </Button>
                </form>
              </div>
              <div className="mt-10">
                <h4 className="font-semibold mb-3 text-lg">FAQ</h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="a1">
                    <AccordionTrigger>Who can participate?</AccordionTrigger>
                    <AccordionContent>
                      Students and professionals from anywhere in the world are
                      welcome.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="a2">
                    <AccordionTrigger>Is it free?</AccordionTrigger>
                    <AccordionContent>
                      Yes, participation is free. Some onsite perks may be
                      limited.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="a3">
                    <AccordionTrigger>Team size?</AccordionTrigger>
                    <AccordionContent>
                      Teams of 1-5 participants are allowed.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
