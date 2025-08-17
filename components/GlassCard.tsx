"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";
import { cn } from "../lib/utils";

export default function GlassCard({
  icon,
  title,
  bullets,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeInUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn(
        "glass rounded-2xl p-6 transition will-change-transform",
        "hover:scale-[1.02] hover:shadow-neon"
      )}
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl neon-border">
        {icon}
      </div>
      <h3 className="mb-2 font-heading text-xl text-white">{title}</h3>
      <ul className="space-y-1 text-sm text-textMuted">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
    </motion.div>
  );
}
