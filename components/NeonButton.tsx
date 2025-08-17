"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  icon?: boolean;
  id?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function NeonButton({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  id,
  type = "button",
  className,
}: Props) {
  const Comp: any = href ? "a" : "button";
  return (
    <motion.div
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Comp
        id={id}
        href={href}
        onClick={onClick}
        type={!href ? type : undefined}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none",
          variant === "primary"
            ? "neon-border bg-black/30 hover:drop-shadow-glow animate-pulseSubtle"
            : "border border-white/20 hover:border-white/40",
          className
        )}
      >
        {children}
        {icon && <ArrowRight className="h-4 w-4" aria-hidden />}
      </Comp>
    </motion.div>
  );
}
