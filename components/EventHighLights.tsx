const ITEMS = [
  "6 Innovation Tracks",
  "₹1,75,000 Prize Pool",
  "Global Participation Welcome",
  "Focus on Rural & Accessibility Solutions",
  "24+ Hour Hackathon",
];

// Pure CSS marquee (see .marquee in globals.css): runs on the compositor
// instead of animating from JavaScript every frame.
export function EventHighlights() {
  return (
    <div className="w-full overflow-hidden border-t border-b rounded-none bg-gradient-to-r from-white via-blue-50 to-white shadow-lg py-6 px-10">
      <div className="marquee">
        {[0, 1, 2, 3].map((copy) => (
          <div
            key={copy}
            className="flex gap-4 pr-4"
            aria-hidden={copy > 0 || undefined}
          >
            {ITEMS.map((t) => (
              <span
                key={t}
                className="px-6 py-2 rounded-full border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
