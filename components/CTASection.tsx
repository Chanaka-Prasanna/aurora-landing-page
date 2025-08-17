"use client";

import Section from "./Section";
import NeonButton from "./NeonButton";

export default function CTASection() {
  return (
    <Section id="get-started" className="relative">
      {/* Stronger glow behind CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(600px_240px_at_50%_50%,rgba(34,211,238,0.20),transparent_70%)]"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="font-heading text-3xl md:text-4xl text-white mb-3">
          Ready to glow past the noise?
        </h3>
        <p className="text-textMuted mb-6">
          Build tools that shine when complexity gets dark.
        </p>
        <div className="flex items-center justify-center gap-4">
          <NeonButton href="#contact">Get Started</NeonButton>
          <NeonButton href="#features" variant="ghost" icon>
            Learn More
          </NeonButton>
        </div>
      </div>
    </Section>
  );
}
