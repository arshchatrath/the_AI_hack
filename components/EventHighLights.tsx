"use client";

import React from "react";

export function EventHighlights() {
  const items = [
    "6 Problem Tracks Available",
    "₹1,75,000 Total Prize Pool",
    "Hybrid Participation",
    "Focus on AI for Social Impact",
    "48-Hour Intensive Hackathon",
    "Industry Expert Mentorship",
    "TIET & UQ Partnership",
    "Real-world Problem Solving",
  ];
  // Duplicate list for seamless marquee
  const list = [...items, ...items, ...items];
  return (
    <div className="w-full overflow-hidden border-t border-b rounded-none bg-gradient-to-r from-white via-blue-50 to-white shadow-lg py-6 px-10">
      <div
        className="marquee px-4 text-sm flex gap-4 whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {list.map((t, i) => (
          <span
            key={i}
            className="px-6 py-2 rounded-full border border-blue-200 bg-blue-100 text-blue-800 font-medium shadow-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
