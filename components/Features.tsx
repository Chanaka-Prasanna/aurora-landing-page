"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingSphere from "./FloatingSphere";
import Section from "./Section";
import { cn } from "../lib/utils";
import Link from "next/link";
import { X } from "lucide-react";

interface FeaturePopover {
  sphereIndex: number;
  title: string;
  description: string;
}

export default function Features() {
  const [openSphere, setOpenSphere] = useState<number | null>(null);
  const [activePopover, setActivePopover] = useState<FeaturePopover | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const spheres = [
    {
      title: "Clarity in Chaos",
      description:
        "Surface the signal in dark complexity with AI-assisted insights that help you navigate through overwhelming information and find what matters most. Our advanced algorithms filter noise and highlight critical patterns.",
      color: "mint" as const,
      floatClass: "animate-floatSlow",
    },
    {
      title: "Adaptive Glow",
      description:
        "Micro-interactions that guide users without distraction, providing just the right amount of feedback at the perfect moment. Every hover, click, and transition feels intentional and delightful.",
      color: "violet" as const,
      floatClass: "animate-floatMedium",
    },
    {
      title: "Secure by Design",
      description:
        "Glass surfaces with clear affordances and strong contrast, ensuring both beauty and accessibility in every interaction. Built with privacy-first principles and enterprise-grade security.",
      color: "magenta" as const,
      floatClass: "animate-floatFast",
    },
  ];

  const handleSphereToggle = (sphereIndex: number, isOpen: boolean) => {
    if (isMobile) {
      // Mobile handles its own modal
      return;
    }

    if (isOpen) {
      setOpenSphere(sphereIndex);
      setActivePopover({
        sphereIndex,
        title: spheres[sphereIndex].title,
        description: spheres[sphereIndex].description,
      });
    } else {
      setOpenSphere(null);
      setActivePopover(null);
    }
  };

  const closePopover = () => {
    setOpenSphere(null);
    setActivePopover(null);
  };

  return (
    <Section
      id="features"
      title="Interactive Features"
      className="overflow-hidden"
    >
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

      {/* Main content area with dynamic height */}
      <div
        className={cn(
          "relative transition-all duration-500 ease-in-out",
          // Dynamic height based on popover state
          activePopover
            ? "min-h-[600px] md:min-h-[700px]"
            : "min-h-[400px] md:min-h-[500px]"
        )}
      >
        {/* Spheres Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16 md:grid-cols-3 place-items-center relative mb-8">
          {spheres.map((sphere, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center min-h-[200px] md:min-h-[250px] w-full"
            >
              <FloatingSphere
                title={sphere.title}
                description={sphere.description}
                color={sphere.color}
                floatClass={sphere.floatClass}
                onToggle={(isOpen) => handleSphereToggle(index, isOpen)}
                isAnyOpen={openSphere !== null}
              />
            </div>
          ))}
        </div>

        {/* Desktop Popover Below Spheres */}
        {!isMobile && (
          <AnimatePresence>
            {activePopover && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 20, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full flex justify-center"
              >
                <div className="glass rounded-2xl p-6 md:p-8 max-w-2xl w-full mx-4 relative shadow-2xl border border-white/20">
                  {/* Close button */}
                  <button
                    onClick={closePopover}
                    className="absolute top-4 right-4 text-textMuted hover:text-white transition-colors p-1 z-10"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Content */}
                  <div className="pr-8">
                    <h3 className="text-2xl md:text-3xl font-heading text-white mb-4 bg-gradient-to-r from-auroraMint to-auroraCyan bg-clip-text text-transparent">
                      {activePopover.title}
                    </h3>
                    <p className="text-textMuted leading-relaxed mb-6 text-base md:text-lg">
                      {activePopover.description}
                    </p>
                    <Link
                      href="#learn-more"
                      className="inline-flex items-center gap-2 text-auroraCyan font-medium hover:text-auroraMint transition-colors group"
                      onClick={closePopover}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </Section>
  );
}
