"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

type Person = {
  name: string;
  title: string;
  org?: string;
  img: string;
  tags?: string[];
};

const ORGS: Person[] = [
  {
    name: "Dr. Anju Bala",
    title: "Associate Professor",

    img: "/anju_bala_mam.png",
  },
  {
    name: "Dr. Inderveer Chana",
    title: "Professor and Associate Head",

    img: "/dr_channaM.png",
  },
  {
    name: "Dr. Amrita Kaur",
    title: "Assistant Professor",

    img: "/harpreet_mam.jpg",
  },
  {
    name: "Dr. Harpreet Singh",
    title: "Assistant Professor",

    img: "/harpreet_sir.jpeg",
  },
  {
    name: "Dr. Maggi Bansal",
    title: "Community Lead",

    img: "/maggi.jpeg",
  },
  {
    name: "Dr. Sachin Kansal",
    title: "Assistant Professor",

    img: "/sachin_sir.jpg",
  },
  {
    name: "Dr. Tim Miller",
    title: "Professor",

    img: "/tim.png",
  },
];

const JUDGES: Person[] = [
  {
    name: "Dr ",
    title: "Lead Organizer",
    org: "Inclusive AI Lab",
    img: "/anju_bala_mam.png",
    tags: ["Diversity", "Outreach"],
  },
  {
    name: "Rahul Verma",
    title: "Co-Organizer",
    org: "Tech4Good",
    img: "/dr_channaM.png",
    tags: ["Operations"],
  },
  {
    name: "Li Wei",
    title: "Program Manager",
    org: "Global AI Network",
    img: "/harpreet_mam.png",
    tags: ["Logistics"],
  },
  {
    name: "Sara Khan",
    title: "Community Lead",
    org: "Open Education",
    img: "/harpreet_sir.png",
    tags: ["Community"],
  },
  {
    name: "Sara Khan",
    title: "Community Lead",
    org: "Open Education",
    img: "/maggi.png",
    tags: ["Community"],
  },
  {
    name: "Sara Khan",
    title: "Community Lead",
    org: "Open Education",
    img: "/sachin_sir.png",
    tags: ["Community"],
  },
  {
    name: "Sara Khan",
    title: "Community Lead",
    org: "Open Education",
    img: "/tim.png",
    tags: ["Community"],
  },
];

const FILTERS = ["All", "AI/ML", "Healthcare", "Education", "Social Impact"];

export function PeopleGrid({ variant }: { variant: "organizers" | "judges" }) {
  const [filter, setFilter] = useState("All");
  const data = variant === "organizers" ? ORGS : JUDGES;
  const filtered = useMemo(
    () =>
      filter === "All" ? data : data.filter((p) => p.tags?.includes(filter)),
    [data, filter]
  );

  return (
    <div className="space-y-6">
      {variant === "judges" && (
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={f === filter ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className={f === filter ? "bg-brand hover:bg-brand/90" : ""}
            >
              {f}
            </Button>
          ))}
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <Card key={p.name} className="overflow-hidden">
            <div
              className="aspect-[4/3] bg-secondary/40"
              role="img"
              aria-label={`${p.name} portrait`}
            >
              <img src={p.img} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-muted-foreground">
                {p.title}
                {p.org ? ` • ${p.org}` : ""}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {(p.tags || []).map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-warm-2 text-warm-2"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
      {variant === "organizers" && (
        <div className="flex items-center gap-4">
          <img
            src="/placeholder-logo.svg"
            alt="Institution logo"
            className="h-8 w-auto opacity-80"
          />
          <img
            src="/placeholder-logo.svg"
            alt="Institution logo"
            className="h-8 w-auto opacity-80"
          />
          <img
            src="/placeholder-logo.svg"
            alt="Institution logo"
            className="h-8 w-auto opacity-80"
          />
        </div>
      )}
    </div>
  );
}
