"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";

export default function FloatingSphere({
  title,
  description,
  floatClass = "animate-floatSlow",
  color = "mint",
}: {
  title: string;
  description: string;
  floatClass?: string;
  color?: "mint" | "cyan" | "violet" | "magenta";
}) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const id = useId();

  const colorMap: Record<string, string> = {
    mint: "from-auroraMint/80 via-auroraCyan/60 to-auroraMint/40",
    cyan: "from-auroraCyan/80 via-auroraViolet/60 to-auroraCyan/40",
    violet: "from-auroraViolet/80 via-auroraMagenta/60 to-auroraViolet/40",
    magenta: "from-auroraMagenta/80 via-auroraViolet/60 to-auroraMagenta/40",
  };

  return (
    <div className="relative flex flex-col items-center group">
      {/* Hint text that appears on hover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        className="absolute -top-8 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/20 z-10"
      >
        Click to explore
      </motion.div>

      {/* Pulsing ring indicator */}
      <div
        className={cn(
          "absolute inset-0 rounded-full transition-opacity duration-300",
          "animate-pulseSubtle border-2 border-auroraCyan/30",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{ width: "200px", height: "200px", top: "-10px", left: "-10px" }}
      />

      <motion.button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative h-[180px] w-[180px] rounded-full transition-all duration-300 outline-none cursor-pointer",
          "bg-gradient-to-br " + colorMap[color],
          "shadow-[0_0_50px_rgba(34,211,238,0.35)]",
          "before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.3),transparent_70%)] before:opacity-60",
          "hover:shadow-[0_0_80px_rgba(34,211,238,0.5)]",
          floatClass
        )}
      >
        {/* Center icon/indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "w-3 h-3 rounded-full bg-white transition-all duration-300",
              isHovered ? "scale-150 opacity-80" : "scale-100 opacity-60"
            )}
          />
        </div>
      </motion.button>

      <motion.div
        id={id}
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : 10,
          pointerEvents: open ? ("auto" as any) : "none",
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-[200px] w-[280px] max-w-[85vw] glass rounded-2xl p-4 text-sm text-textMuted z-20"
      >
        <h4 className="mb-1 font-heading text-white">{title}</h4>
        <p className="mb-2">{description}</p>
        <Link href="#" className="link-underline text-auroraCyan">
          Learn More
        </Link>
      </motion.div>
    </div>
  );
}
