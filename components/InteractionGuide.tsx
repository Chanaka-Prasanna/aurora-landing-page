"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function InteractionGuide() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show the guide after 3 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 3000);

    // Auto-hide after 10 seconds
    const autoHideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 13000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoHideTimer);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="fixed bottom-8 right-8 z-50 glass rounded-2xl p-4 max-w-xs shadow-2xl border border-auroraCyan/30"
        >
          <div className="flex items-start gap-3">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-auroraCyan to-auroraMint flex items-center justify-center mt-1 flex-shrink-0"
            >
              <motion.div
                animate={{ scale: [0.8, 1, 0.8] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-3 h-3 rounded-full bg-white"
              />
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-medium text-sm mb-1">
                💡 Interactive Tip
              </div>
              <div className="text-textMuted text-xs leading-relaxed">
                Hover and click the glowing spheres in the Features section to
                discover more!
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-textMuted hover:text-white transition-colors p-1 flex-shrink-0"
              aria-label="Dismiss tip"
            >
              <X className="h-3 w-3" />
            </button>
          </div>

          {/* Pointer to features section */}
          <motion.div
            animate={{ x: [-5, 5, -5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-2 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-auroraCyan/60" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
