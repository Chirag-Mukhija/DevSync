"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
 
export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Code Together. Build Faster. Collaborate Smarter    
    </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        DevSync is a real-time collaborative IDE where developers can code, debug, and create together — powered by Next.js and cloud technology
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href="/new" // start collaborating , dashboard maybe TODO
          className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-[1.02] transition-transform"
          aria-label="Start collaborating"
        >
          Start collaborating
        </a>

        <a
          href="https://github.com/Chirag-Mukhija/DevSync.git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-white/25 px-4 py-2 text-sm text-white hover:bg-white/5 transition"
          aria-label="View on GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.14 7.64 10.62.56.1.76-.24.76-.53 0-.26-.01-1.12-.01-2.03-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.16 1.71 1.16 1 .* 2.58.74 3.22.56.1-.44.39-.74.71-.91-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.62 1.52.24 2.64.12 2.92.72.78 1.16 1.78 1.16 3 0 4.29-2.61 5.24-5.1 5.52.4.34.76 1.02.76 2.06 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.77.53C19.05 20.89 22.25 16.7 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
          </svg>
          View on GitHub
        </a>
      </div>

    </WavyBackground>
  );
}