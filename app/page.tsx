import { NavBar } from "@/components/nav-bar";
import { Hero } from "@/components/hero";
import { ProblemStatements } from "@/components/problem-statements";
import { Timeline } from "@/components/timeline";
import { Registration } from "@/components/registration";
import { PeopleGrid } from "@/components/people-grid";
import { ContactSection } from "@/components/contact-section";
import { EventHighlights } from "@/components/EventHighLights";
export default function Page() {
  return (
    <main className="min-h-[100dvh]">
      <NavBar />
      <Hero />
      <div className="w-full">
        <EventHighlights />
      </div>
      <section
        id="problems"
        aria-labelledby="problems-title"
        className="py-16 md:py-24 bg-secondary/10"
      >
        <div className="container mx-auto px-4">
          <h2
            id="problems-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-8"
          >
            Problem Statements
          </h2>
          <ProblemStatements />
        </div>
      </section>
      <section
        id="timeline"
        aria-labelledby="timeline-title"
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <h2
            id="timeline-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-8"
          >
            Timeline
          </h2>
          <Timeline />
        </div>
      </section>
      <section
        id="registration"
        aria-labelledby="registration-title"
        className="py-16 md:py-24 bg-secondary/10"
      >
        <div className="container mx-auto px-4">
          <h2
            id="registration-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-8"
          >
            Registration
          </h2>
          <Registration />
        </div>
      </section>
      <section
        id="organizers"
        aria-labelledby="organizers-title"
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <h2
            id="organizers-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-8"
          >
            Organizers
          </h2>
          <PeopleGrid variant="organizers" />
        </div>
      </section>
      <section
        id="judges"
        aria-labelledby="judges-title"
        className="py-16 md:py-24 bg-secondary/10"
      >
        <div className="container mx-auto px-4">
          <h2
            id="judges-title"
            className="text-3xl md:text-4xl font-semibold text-pretty mb-8"
          >
            Judges
          </h2>
          <PeopleGrid variant="judges" />
        </div>
      </section>
      <ContactSection />
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-sm text-muted-foreground">
          © 2025 AI for Inclusion Hackathon. Built with a focus on accessibility
          and social impact.
        </div>
      </footer>
    </main>
  );
}
