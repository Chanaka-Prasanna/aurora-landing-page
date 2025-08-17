"use client";

import Section from "./Section";
import GlassCard from "./GlassCard";
import { Monitor, Smartphone, Palette, Code, Zap, Shield } from "lucide-react";

export default function Showcase() {
  return (
    <Section id="showcase" title="What We Build">
      <div className="space-y-16">
        {/* Platform Features */}
        <div>
          <h3 className="text-xl font-heading text-white mb-8 text-center">
            Cross-Platform Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard
              icon={<Monitor className="h-5 w-5 text-auroraCyan" />}
              title="Web Applications"
              bullets={[
                "Responsive glass morphism design",
                "Lightning-fast performance",
                "Accessibility-first approach",
              ]}
              delay={0.1}
            />
            <GlassCard
              icon={<Smartphone className="h-5 w-5 text-auroraMint" />}
              title="Mobile Interfaces"
              bullets={[
                "Touch-optimized interactions",
                "Adaptive layouts",
                "Native-like animations",
              ]}
              delay={0.15}
            />
            <GlassCard
              icon={<Code className="h-5 w-5 text-auroraViolet" />}
              title="Developer Tools"
              bullets={[
                "Component libraries",
                "Design system tokens",
                "Development workflows",
              ]}
              delay={0.2}
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div>
          <h3 className="text-xl font-heading text-white mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlassCard
              icon={<Palette className="h-5 w-5 text-auroraMagenta" />}
              title="Design Systems"
              bullets={[
                "Tailwind CSS v4",
                "Framer Motion animations",
                "Custom design tokens",
              ]}
              delay={0.25}
            />
            <GlassCard
              icon={<Zap className="h-5 w-5 text-neonLime" />}
              title="Performance"
              bullets={[
                "Next.js 15 with Turbopack",
                "Optimized bundle sizes",
                "Edge-ready deployment",
              ]}
              delay={0.3}
            />
            <GlassCard
              icon={<Shield className="h-5 w-5 text-auroraCyan" />}
              title="Best Practices"
              bullets={[
                "TypeScript for type safety",
                "ESLint & Prettier setup",
                "Comprehensive testing",
              ]}
              delay={0.35}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
