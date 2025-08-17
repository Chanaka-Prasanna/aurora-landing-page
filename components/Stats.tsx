"use client";

import Section from "./Section";

export default function Stats() {
  const stats = [
    { value: "99.9%", label: "Uptime", description: "Reliable performance" },
    { value: "< 100ms", label: "Load Time", description: "Lightning fast" },
    { value: "WCAG 2.1", label: "Accessibility", description: "AA compliant" },
    { value: "500+", label: "Components", description: "Ready to use" },
  ];

  const testimonials = [
    {
      quote:
        "Aurora's design system transformed our development process. The glass morphism effects are stunning and perform beautifully.",
      author: "Sarah Chen",
      role: "Lead Designer at TechFlow",
    },
    {
      quote:
        "The attention to accessibility and performance is exceptional. Our users love the smooth interactions.",
      author: "Marcus Rodriguez",
      role: "Frontend Lead at DataSync",
    },
    {
      quote:
        "Finally, a design system that doesn't compromise on aesthetics or functionality. Highly recommended.",
      author: "Emily Watson",
      role: "Product Manager at CloudVision",
    },
  ];

  return (
    <>
      {/* Stats Section */}
      <Section className="bg-gradient-to-r from-backgroundLo/50 to-backgroundHi/50 backdrop-blur-sm border-y border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-auroraCyan font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-textMuted text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" title="What Our Users Say">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass rounded-2xl p-6">
              <div className="text-textMuted mb-4 leading-relaxed">
                "{testimonial.quote}"
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="text-white font-medium">
                  {testimonial.author}
                </div>
                <div className="text-auroraCyan text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
