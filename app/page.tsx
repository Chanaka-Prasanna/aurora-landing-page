import AuroraBackground from "../components/AuroraBackground";
import Header from "../components/Header";
import Section from "../components/Section";
import GlassCard from "../components/GlassCard";
import Features from "../components/Features";
import LearnMore from "../components/LearnMore";
import Showcase from "../components/Showcase";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import NeonButton from "../components/NeonButton";
import InteractionGuide from "../components/InteractionGuide";
import { Sparkles, Shield, Gauge } from "lucide-react";

export default function Page() {
  return (
    <>
      <AuroraBackground />
      <Header />

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 md:pt-28 pb-16 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 z-[-1] h-[320px] w-[320px] -translate-x-1/2 rounded-full
                     bg-[radial-gradient(closest-side,rgba(34,211,238,0.20),transparent_70%)]
                     blur-3xl"
        />
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl md:text-6xl text-white">
            Glow in the Dark Innovation.
          </h1>
          <p className="mt-4 text-lg text-textMuted">
            We build tools that shine when complexity gets dark.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <NeonButton href="#get-started" id="primary-cta">
              Get Started
            </NeonButton>
            <NeonButton href="#learn-more" variant="ghost" icon>
              Learn More
            </NeonButton>
          </div>
        </div>
      </section>

      {/* About */}
      <Section
        id="about"
        title="About Aurora"
        className="relative z-10 bg-gradient-to-b from-transparent via-backgroundLo/90 to-backgroundHi/80 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-3xl text-textMuted">
          <p className="mb-3">
            Aurora focuses on clarity, speed, and polish. We help teams build
            reliable interfaces that remain legible in high complexity.
          </p>
          <p>
            Our approach blends minimal surfaces, glass panels, and soft neon
            accents with careful motion design for a calm, confident product
            feel.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <GlassCard
            icon={<Sparkles aria-hidden className="h-5 w-5 text-auroraCyan" />}
            title="Design System"
            bullets={[
              "Glass panels with contrast safety",
              "Neon accents with restraint",
              "Consistent rhythm and spacing",
            ]}
            delay={0.05}
          />
          <GlassCard
            icon={<Shield aria-hidden className="h-5 w-5 text-auroraMint" />}
            title="Accessible by Default"
            bullets={[
              "AA contrast or better",
              "Focus states and keyboard paths",
              "Aria labels for icons",
            ]}
            delay={0.12}
          />
          <GlassCard
            icon={<Gauge aria-hidden className="h-5 w-5 text-auroraViolet" />}
            title="Performance Minded"
            bullets={[
              "Subtle CSS first animations",
              "Framer Motion for entrances",
              "Optimized images",
            ]}
            delay={0.18}
          />
        </div>
      </Section>

      <div className="bg-gradient-to-b from-backgroundHi via-backgroundLo to-backgroundHi">
        <Features />
      </div>

      <LearnMore />

      <div className="bg-gradient-to-b from-backgroundLo via-backgroundHi to-backgroundLo">
        <Showcase />
        <Stats />
      </div>

      <div className="bg-gradient-to-b from-backgroundLo to-backgroundHi">
        <Contact />
        <CTASection />
      </div>

      <Footer />

      {/* Interaction Guide */}
      <InteractionGuide />
    </>
  );
}
