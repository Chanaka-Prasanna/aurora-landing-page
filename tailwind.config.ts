import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette
        backgroundLo: "#0B0F19",
        backgroundHi: "#0F172A",
        auroraMint: "#34F5C5",
        auroraCyan: "#22D3EE",
        auroraViolet: "#A78BFA",
        auroraMagenta: "#F472B6",
        neonLime: "#A3FF12",
        neonCyan: "#22D3EE",
        textPrimary: "#FFFFFF",
        textSecondary: "#C7D2FE",
        textMuted: "#94A3B8",
      },
      dropShadow: {
        glow: "0 0 12px rgba(51, 255, 203, 0.35)",
        glowStrong: "0 0 24px rgba(51, 255, 203, 0.6)",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.18) inset, 0 0 0 1px rgba(255,255,255,0.08)",
        neon: "0 0 0 1.5px rgba(163,255,18,0.8), 0 0 18px rgba(163,255,18,0.35)",
      },
      backdropBlur: {
        xl: "24px",
      },
      borderWidth: {
        "1.5": "1.5px",
      },
      keyframes: {
        auroraMove: {
          "0%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12%) translateX(6%) rotate(10deg)" },
          "100%": { transform: "translateY(0) translateX(0) rotate(0deg)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        pulseSubtle: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(34,211,238,0.25)" },
          "50%": { boxShadow: "0 0 0 10px rgba(34,211,238,0.0)" },
        },
      },
      animation: {
        aurora: "auroraMove 18s ease-in-out infinite",
        floatSlow: "float 6s ease-in-out infinite",
        floatMedium: "float 5s ease-in-out infinite",
        floatFast: "float 4s ease-in-out infinite",
        pulseSubtle: "pulseSubtle 3s ease-in-out infinite",
      },
      fontFamily: {
        heading: ["var(--font-sora)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
