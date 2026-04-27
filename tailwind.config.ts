import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        saffron: "var(--saffron)",
        "saffron-soft": "var(--saffron-soft)",
        moss: "var(--moss)",
        clay: "var(--clay)"
      },
      fontFamily: {
        sans: [
          "\"SF Pro Text\"",
          "\"SF Pro Display\"",
          "\"Segoe UI Variable\"",
          "\"Segoe UI\"",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "\"SF Pro Display\"",
          "\"Segoe UI Variable\"",
          "\"SF Pro Text\"",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(28, 29, 24, 0.08)",
        depth: "0 28px 60px rgba(28, 29, 24, 0.14)",
        insetGlow: "inset 0 1px 0 rgba(255,255,255,0.8)"
      },
      backgroundImage: {
        halo:
          "linear-gradient(180deg, #f6f1e8 0%, #fff8ed 44%, #f3eadc 100%)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      maxWidth: {
        shell: "80rem"
      }
    }
  },
  plugins: []
};

export default config;
