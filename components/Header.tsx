"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 transition",
        scrolled
          ? "backdrop-blur-xl bg-black/20 border-b border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Aurora logo" width={28} height={28} />
          <span className="relative font-heading text-lg tracking-wide text-white">
            Aurora
            <span
              aria-hidden
              className="absolute -top-2 right-[-10px] h-2 w-2 rounded-full bg-auroraCyan drop-shadow-glow"
            />
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-textMuted">
          <a href="#about" className="link-underline">
            About
          </a>
          <a href="#features" className="link-underline">
            Features
          </a>
          <a href="#learn-more" className="link-underline">
            Learn More
          </a>
          <a href="#contact" className="link-underline">
            Contact
          </a>
          <a
            href="#get-started"
            className="rounded-full px-4 py-2 text-sm font-medium neon-border hover:drop-shadow-glow transition"
          >
            Get Started
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
