"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";
import { cn } from "../lib/utils";

export default function Section({
  id,
  title,
  children,
  className,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {title && (
          <motion.h2
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -120px 0px" }}
            className="mb-8 md:mb-12 font-heading text-3xl md:text-4xl text-white text-center"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
