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
    
    </WavyBackground>
  );
}