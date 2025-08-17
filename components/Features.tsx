"use client";

import Section from "./Section";
import FloatingSphere from "./FloatingSphere";

export default function Features() {
  return (
    <Section id="features" title="Interactive Features">
      <div className="text-center mb-12">
        <p className="text-textMuted text-lg mb-4">
          Hover and click the glowing spheres below to discover our core
          features
        </p>
        <div className="flex items-center justify-center gap-2 text-auroraCyan text-sm">
          <div className="w-2 h-2 rounded-full bg-auroraCyan animate-pulseSubtle"></div>
          <span>Interactive elements await your exploration</span>
          <div className="w-2 h-2 rounded-full bg-auroraCyan animate-pulseSubtle"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-3 place-items-center">
        <FloatingSphere
          title="Clarity in Chaos"
          description="Surface the signal in dark complexity with AI-assisted insights that help you navigate through overwhelming information and find what matters most."
          color="mint"
          floatClass="animate-floatSlow"
        />
        <FloatingSphere
          title="Adaptive Glow"
          description="Micro-interactions that guide users without distraction, providing just the right amount of feedback at the perfect moment."
          color="violet"
          floatClass="animate-floatMedium"
        />
        <FloatingSphere
          title="Secure by Design"
          description="Glass surfaces with clear affordances and strong contrast, ensuring both beauty and accessibility in every interaction."
          color="magenta"
          floatClass="animate-floatFast"
        />
      </div>
    </Section>
  );
}
