import {
  nextui
} from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            indigo: {
              DEFAULT: "#006dae",
              100: "#cce2ef",
              200: "#99c5df",
              300: "#66a7ce",
              400: "#338abe",
              500: "#006dae",
              600: "#00578b",
              700: "#004168",
              800: "#002c46",
              900: "#001623",
            },
            muted: {
              DEFAULT: "#F1F5F9",
              foreground: "#64748B",
            },
            primary: {
              DEFAULT: '#0F172A',
              foreground: '#F8FAFC'
            },
            secondary: {
              DEFAULT: '#F1F5F9',
              foreground: '#0F172A',
              100: "#fcfdfe",
              200: "#f9fbfd",
              300: "#f7f9fb",
              400: "#f4f7fa",
              500: "#f1f5f9",
              600: "#c1c4c7",
              700: "#919395",
              800: "#606264",
              900: "#303132"
            },
            background: '#FFFFFF',
            foreground: '#0F172A'
          },
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],
};