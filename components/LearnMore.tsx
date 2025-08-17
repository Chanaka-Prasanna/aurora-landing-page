"use client";

import Section from "./Section";
import GlassCard from "./GlassCard";
import {
  BookOpen,
  Target,
  Users,
  Lightbulb,
  Award,
  TrendingUp,
  Palette,
  Code2,
  Zap,
  Shield,
  Globe,
  Layers,
} from "lucide-react";

export default function LearnMore() {
  return (
    <div className="bg-gradient-to-b from-backgroundLo via-backgroundHi to-backgroundLo">
      <Section
        id="learn-more"
        title="Deep Dive into Aurora"
        className="relative z-10"
      >
        <div className="space-y-20">
          {/* Introduction */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="text-3xl font-heading text-white mb-6">
                The Future of Interface Design
              </h3>
              <p className="text-textMuted text-lg leading-relaxed mb-8">
                Aurora isn't just another design system—it's a comprehensive
                philosophy that bridges the gap between aesthetic beauty and
                functional excellence. Born from years of research in user
                experience, accessibility, and performance optimization, Aurora
                represents the next evolution in how we think about digital
                interfaces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-auroraCyan/10 border border-auroraCyan/20">
                  <div className="text-3xl font-bold text-auroraCyan mb-2">
                    3+
                  </div>
                  <div className="text-white font-medium mb-1">
                    Years of Research
                  </div>
                  <div className="text-textMuted text-sm">
                    Continuous innovation and refinement
                  </div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-auroraMint/10 border border-auroraMint/20">
                  <div className="text-3xl font-bold text-auroraMint mb-2">
                    500+
                  </div>
                  <div className="text-white font-medium mb-1">
                    Companies Trust Us
                  </div>
                  <div className="text-textMuted text-sm">
                    From startups to Fortune 500
                  </div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-auroraViolet/10 border border-auroraViolet/20">
                  <div className="text-3xl font-bold text-auroraViolet mb-2">
                    99.9%
                  </div>
                  <div className="text-white font-medium mb-1">
                    Accessibility Score
                  </div>
                  <div className="text-textMuted text-sm">
                    WCAG 2.1 AAA compliant
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-auroraCyan/20 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-auroraCyan" />
              </div>
              <h3 className="text-2xl font-heading text-white mb-4">
                Our Mission
              </h3>
              <p className="text-textMuted leading-relaxed mb-6">
                To democratize exceptional design by creating tools and systems
                that enable teams of all sizes to build interfaces that are not
                only visually stunning but also inherently accessible,
                performant, and user-centric.
              </p>
              <ul className="space-y-3 text-textMuted">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-auroraCyan mt-2 flex-shrink-0"></div>
                  <span>Make great design accessible to everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-auroraCyan mt-2 flex-shrink-0"></div>
                  <span>Bridge the gap between designers and developers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-auroraCyan mt-2 flex-shrink-0"></div>
                  <span>Champion accessibility in every design decision</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-auroraViolet/20 flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-auroraViolet" />
              </div>
              <h3 className="text-2xl font-heading text-white mb-4">
                Our Vision
              </h3>
              <p className="text-textMuted leading-relaxed mb-6">
                A world where every digital interface is beautiful, functional,
                and accessible. Where the complexity of modern technology is
                masked by intuitive design, and where users can focus on their
                goals without fighting the interface.
              </p>
              <ul className="space-y-3 text-textMuted">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-auroraViolet mt-2 flex-shrink-0"></div>
                  <span>Universal design standards across all platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-auroraViolet mt-2 flex-shrink-0"></div>
                  <span>Seamless experiences across devices and contexts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-auroraViolet mt-2 flex-shrink-0"></div>
                  <span>Technology that adapts to human needs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Principles */}
          <div>
            <h3 className="text-2xl font-heading text-white mb-12 text-center">
              Core Design Principles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-auroraCyan/20 to-auroraCyan/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-10 w-10 text-auroraCyan" />
                </div>
                <h4 className="text-white font-heading mb-3">
                  Aesthetic Excellence
                </h4>
                <p className="text-textMuted text-sm leading-relaxed">
                  Every pixel serves a purpose. Our glass morphism approach
                  creates depth and hierarchy while maintaining clarity and
                  focus.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-auroraMint/20 to-auroraMint/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-auroraMint" />
                </div>
                <h4 className="text-white font-heading mb-3">Human-Centered</h4>
                <p className="text-textMuted text-sm leading-relaxed">
                  Designed for real people with diverse needs. Every interaction
                  is tested for usability across different abilities and
                  contexts.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-auroraViolet/20 to-auroraViolet/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-auroraViolet" />
                </div>
                <h4 className="text-white font-heading mb-3">
                  Performance First
                </h4>
                <p className="text-textMuted text-sm leading-relaxed">
                  Beautiful doesn't mean bloated. Our components are optimized
                  for speed and efficiency without compromising on visual
                  appeal.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-auroraMagenta/20 to-auroraMagenta/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-auroraMagenta" />
                </div>
                <h4 className="text-white font-heading mb-3">
                  Universal Access
                </h4>
                <p className="text-textMuted text-sm leading-relaxed">
                  Accessibility isn't an afterthought—it's built into every
                  component from the ground up, ensuring everyone can use what
                  we create.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Excellence */}
          <div className="glass rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-heading text-white mb-8 text-center">
              Technical Excellence Under the Hood
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl text-white font-heading mb-6 flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-auroraCyan" />
                  Modern Architecture
                </h4>
                <div className="space-y-4 text-textMuted">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-medium text-white mb-2">
                      Next.js 15 + Turbopack
                    </div>
                    <div className="text-sm">
                      Lightning-fast development and production builds with the
                      latest React features
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-medium text-white mb-2">
                      TypeScript First
                    </div>
                    <div className="text-sm">
                      Complete type safety ensuring robust, maintainable code
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-medium text-white mb-2">
                      Tailwind CSS v4
                    </div>
                    <div className="text-sm">
                      Next-generation utility-first CSS with advanced features
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl text-white font-heading mb-6 flex items-center gap-3">
                  <Layers className="h-6 w-6 text-auroraMint" />
                  Component System
                </h4>
                <div className="space-y-4 text-textMuted">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-medium text-white mb-2">
                      Modular Design
                    </div>
                    <div className="text-sm">
                      Every component is self-contained and reusable across
                      projects
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-medium text-white mb-2">
                      Framer Motion Integration
                    </div>
                    <div className="text-sm">
                      Smooth, performant animations that enhance user experience
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="font-medium text-white mb-2">
                      Design Tokens
                    </div>
                    <div className="text-sm">
                      Consistent styling system that scales across your entire
                      application
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Aurora */}
          <div>
            <h3 className="text-2xl font-heading text-white mb-12 text-center">
              Why Choose Aurora Over Alternatives?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard
                icon={<BookOpen className="h-5 w-5 text-auroraCyan" />}
                title="Comprehensive Documentation"
                bullets={[
                  "Interactive component playground",
                  "Real-world implementation examples",
                  "Best practice guidelines and patterns",
                  "Video tutorials and workshops",
                ]}
                delay={0.1}
              />
              <GlassCard
                icon={<Award className="h-5 w-5 text-auroraMint" />}
                title="Industry Recognition"
                bullets={[
                  "Winner of 2024 Design System Awards",
                  "Featured in Awwwards and CSS Design Awards",
                  "Trusted by Fortune 500 companies",
                  "Open source with MIT license",
                ]}
                delay={0.15}
              />
              <GlassCard
                icon={<TrendingUp className="h-5 w-5 text-auroraViolet" />}
                title="Proven Business Impact"
                bullets={[
                  "40% faster development cycles",
                  "60% reduction in design inconsistencies",
                  "95% developer satisfaction rate",
                  "25% improvement in user engagement",
                ]}
                delay={0.2}
              />
            </div>
          </div>

          {/* Design Philosophy Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-heading text-white mb-8">
                Design Philosophy Deep Dive
              </h3>
              <div className="space-y-8">
                <div className="border-l-2 border-auroraCyan/30 pl-6">
                  <h4 className="text-xl text-white font-heading mb-3">
                    Glass Morphism Revolution
                  </h4>
                  <p className="text-textMuted leading-relaxed mb-4">
                    Our interpretation of glass morphism goes beyond surface
                    aesthetics. We use translucent surfaces to create
                    information hierarchy, guide user attention, and provide
                    contextual depth without overwhelming the interface.
                  </p>
                  <ul className="space-y-2 text-textMuted text-sm">
                    <li>• Mathematically calculated blur and opacity ratios</li>
                    <li>• Contrast-safe background overlays</li>
                    <li>• Performance-optimized backdrop filters</li>
                  </ul>
                </div>

                <div className="border-l-2 border-auroraMint/30 pl-6">
                  <h4 className="text-xl text-white font-heading mb-3">
                    Strategic Neon Accents
                  </h4>
                  <p className="text-textMuted leading-relaxed mb-4">
                    Every neon element serves a functional purpose—from
                    indicating interactive states to providing feedback and
                    creating visual flow. Our color palette is carefully crafted
                    for both aesthetic appeal and accessibility compliance.
                  </p>
                  <ul className="space-y-2 text-textMuted text-sm">
                    <li>• WCAG AAA contrast ratios maintained</li>
                    <li>• Color-blind friendly palette selection</li>
                    <li>• Semantic color meanings across contexts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h4 className="text-xl text-white font-heading mb-6">
                By the Numbers
              </h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                  <span className="text-textMuted">Components Available</span>
                  <span className="text-2xl font-bold text-auroraCyan">
                    150+
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                  <span className="text-textMuted">Design Tokens</span>
                  <span className="text-2xl font-bold text-auroraMint">
                    200+
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                  <span className="text-textMuted">Bundle Size (gzipped)</span>
                  <span className="text-2xl font-bold text-auroraViolet">
                    &lt; 50KB
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                  <span className="text-textMuted">Browser Support</span>
                  <span className="text-2xl font-bold text-auroraMagenta">
                    95%+
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-white/5">
                  <span className="text-textMuted">Lighthouse Score</span>
                  <span className="text-2xl font-bold text-neonLime">
                    100/100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
