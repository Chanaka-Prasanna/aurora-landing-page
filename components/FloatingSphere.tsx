"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useId, useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import Link from "next/link";
import { X } from "lucide-react";

export default function FloatingSphere({
  title,
  description,
  floatClass = "animate-floatSlow",
  color = "mint",
  onToggle,
  isAnyOpen,
}: {
  title: string;
  description: string;
  floatClass?: string;
  color?: "mint" | "cyan" | "violet" | "magenta";
  onToggle?: (isOpen: boolean) => void;
  isAnyOpen?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExtraSmall, setIsExtraSmall] = useState(false);
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  // Check screen sizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsExtraSmall(window.innerWidth < 400);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle open/close and notify parent
  const handleToggle = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    onToggle?.(newOpenState);
  };

  // Close when another sphere opens
  useEffect(() => {
    if (isAnyOpen && !open) {
      // Don't interfere with other open states
    }
  }, [isAnyOpen, open]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        if (open) {
          setOpen(false);
          onToggle?.(false);
        }
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open, onToggle]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        onToggle?.(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, onToggle]);

  const colorMap: Record<string, string> = {
    mint: "from-auroraMint/80 via-auroraCyan/60 to-auroraMint/40",
    cyan: "from-auroraCyan/80 via-auroraViolet/60 to-auroraCyan/40",
    violet: "from-auroraViolet/80 via-auroraMagenta/60 to-auroraViolet/40",
    magenta: "from-auroraMagenta/80 via-auroraViolet/60 to-auroraMagenta/40",
  };

  const getSphereSize = () => {
    if (isExtraSmall) return "h-[80px] w-[80px]";
    if (isMobile) return "h-[100px] w-[100px]";
    return "h-[140px] w-[140px] md:h-[160px] md:w-[160px] lg:h-[180px] lg:w-[180px]";
  };

  const getIndicatorSize = () => {
    if (isExtraSmall) return "w-1.5 h-1.5";
    if (isMobile) return "w-2 h-2";
    return "w-2.5 h-2.5 md:w-3 md:h-3";
  };

  const getRingSize = () => {
    if (isExtraSmall) return { width: "100px", height: "100px" };
    if (isMobile) return { width: "120px", height: "120px" };
    return { width: "160px", height: "160px" };
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center group w-full"
    >
      {/* Hint text that appears on hover (only on larger screens) */}
      {!isMobile && !isExtraSmall && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          className="absolute -top-8 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/20 z-10 left-1/2 transform -translate-x-1/2"
        >
          Click to explore
        </motion.div>
      )}

      {/* Pulsing ring indicator (only on larger screens) */}
      {!isMobile && !isExtraSmall && (
        <div
          className={cn(
            "absolute rounded-full transition-opacity duration-300 pointer-events-none",
            "animate-pulseSubtle border-2 border-auroraCyan/30",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            ...getRingSize(),
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      <motion.button
        aria-expanded={open}
        aria-controls={id}
        onClick={handleToggle}
        onMouseEnter={() => !isMobile && !isExtraSmall && setIsHovered(true)}
        onMouseLeave={() => !isMobile && !isExtraSmall && setIsHovered(false)}
        whileHover={{ scale: isMobile || isExtraSmall ? 1 : 1.04 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative rounded-full transition-all duration-300 outline-none cursor-pointer mx-auto",
          getSphereSize(),
          "bg-gradient-to-br " + colorMap[color],
          "shadow-[0_0_30px_rgba(34,211,238,0.25)] md:shadow-[0_0_50px_rgba(34,211,238,0.35)]",
          "before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.3),transparent_70%)] before:opacity-60",
          "hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] md:hover:shadow-[0_0_80px_rgba(34,211,238,0.5)]",
          !open && floatClass
        )}
      >
        {/* Center icon/indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "rounded-full bg-white transition-all duration-300",
              getIndicatorSize(),
              isHovered ? "scale-150 opacity-80" : "scale-100 opacity-60"
            )}
          />
        </div>
      </motion.button>

      {/* Mobile Modal Overlay (for very small screens) */}
      <AnimatePresence>
        {open && (isMobile || isExtraSmall) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3"
            onClick={() => {
              setOpen(false);
              onToggle?.(false);
            }}
          >
            <motion.div
              id={id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className={cn(
                "glass rounded-2xl p-4 text-sm text-textMuted w-full mx-3 relative",
                isExtraSmall ? "max-w-xs" : "max-w-sm"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setOpen(false);
                  onToggle?.(false);
                }}
                className="absolute top-3 right-3 text-textMuted hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <h4
                className={cn(
                  "font-heading text-white pr-8 mb-3",
                  isExtraSmall ? "text-base" : "text-lg"
                )}
              >
                {title}
              </h4>
              <p className="mb-4 leading-relaxed">{description}</p>
              <Link
                href="#"
                className="link-underline text-auroraCyan font-medium"
                onClick={() => {
                  setOpen(false);
                  onToggle?.(false);
                }}
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
