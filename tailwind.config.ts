import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        backgroundalabaster: "var(--backgroundalabaster)",
        backgroundmerino: "var(--backgroundmerino)",
        dividermercury: "var(--dividermercury)",
        "functionaldodger-blue-link": "var(--functionaldodger-blue-link)",
        "functionallima-success": "var(--functionallima-success)",
        "functionalsun-warning": "var(--functionalsun-warning)",
        "functionalsunset-orange-error": "var(--functionalsunset-orange-error)",
        "neutralsdove-gray-gray-3": "var(--neutralsdove-gray-gray-3)",
        "neutralsmine-shaft-gray-1": "var(--neutralsmine-shaft-gray-1)",
        "neutralssilver-chalice-gray-4": "var(--neutralssilver-chalice-gray-4)",
        "neutralstundora-gray-2": "var(--neutralstundora-gray-2)",
        "primary-driftwood": "var(--primary-driftwood)",
        secondarynapal: "var(--secondarynapal)",
        secondarysandal: "var(--secondarysandal)",
        "secondaryshingle-fawn": "var(--secondaryshingle-fawn)",
        secondaryxanadu: "var(--secondaryxanadu)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "gotham-14-book-body": "var(--gotham-14-book-body-font-family)",
        "gotham-14-reg-body": "var(--gotham-14-reg-body-font-family)",
        "gotham-16-book-body": "var(--gotham-16-book-body-font-family)",
        "gotham-16-book-title": "var(--gotham-16-book-title-font-family)",
        "gotham-18-book-body": "var(--gotham-18-book-body-font-family)",
        "gotham-18-book-title": "var(--gotham-18-book-title-font-family)",
        "gotham-18-reg-body": "var(--gotham-18-reg-body-font-family)",
        "gotham-20-book-body": "var(--gotham-20-book-body-font-family)",
        "gotham-20-book-title": "var(--gotham-20-book-title-font-family)",
        "legend-16-text": "var(--legend-16-text-font-family)",
        "legend-16-text-24-LH": "var(--legend-16-text-24-LH-font-family)",
        "legend-20-text": "var(--legend-20-text-font-family)",
        "legend-20-text-2px": "var(--legend-20-text-2px-font-family)",
        "legend-24-text": "var(--legend-24-text-font-family)",
        "legend-44-text": "var(--legend-44-text-font-family)",
        "legend-70-text": "var(--legend-70-text-font-family)",
        "others-12-reg-ALL-CAPS": "var(--others-12-reg-ALL-CAPS-font-family)",
        "others-14-book-ALL-CAPS": "var(--others-14-book-ALL-CAPS-font-family)",
        "others-16-book-ALL-CAPS": "var(--others-16-book-ALL-CAPS-font-family)",
        "others-16-reg-ALL-CAPS": "var(--others-16-reg-ALL-CAPS-font-family)",
        "others-18-book-APP-CAPS": "var(--others-18-book-APP-CAPS-font-family)",
        "others-18-reg-ALL-CAPS": "var(--others-18-reg-ALL-CAPS-font-family)",
        "others-28-reg-ALL-CAPS": "var(--others-28-reg-ALL-CAPS-font-family)",
        "others-32-book-ALL-CAPS": "var(--others-32-book-ALL-CAPS-font-family)",
        "others-40-text-ALL-CAPS": "var(--others-40-text-ALL-CAPS-font-family)",
        "others-40-text-ALL-CAPS-HERO":
          "var(--others-40-text-ALL-CAPS-HERO-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: { button: "var(--button)" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
