"use client";

import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function AuroraBackground({
  className,
}: {
  className?: string;
}) {
  // Absolutely positioned full viewport animated ribbons
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Ribbon 1 */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] h-[60vh] w-[80vw]
                   bg-[radial-gradient(circle_at_30%_30%,rgba(52,245,197,0.25),transparent_60%)]
                   blur-3xl"
        animate={{}}
        transition={{}}
      />
      {/* Ribbon 2 */}
      <motion.div
        className="absolute top-[10%] right-[-20%] h-[70vh] w-[70vw]
                   bg-[radial-gradient(circle_at_70%_40%,rgba(167,139,250,0.20),transparent_60%)]
                   blur-3xl"
        animate={{}}
        transition={{}}
      />
      {/* Ribbon 3 animated */}
      <motion.div
        className="absolute bottom-[-15%] left-[10%] h-[70vh] w-[90vw]
                   bg-[radial-gradient(60%_40%_at_50%_50%,rgba(244,114,182,0.20),transparent)]
                   blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_110%,rgba(52,245,197,0.06),transparent_60%)]" />
    </div>
  );
}
