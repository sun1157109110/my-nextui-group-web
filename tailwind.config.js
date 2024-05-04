import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      light:{
        colors:{
          indigo: {
            DEFAULT:"#006dae",
            100: "#cce2ef",
            200: "#99c5df",
            300: "#66a7ce",
            400: "#338abe",
            500: "#006dae",
            600: "#00578b",
            700: "#004168",
            800: "#002c46",
            900: "#001623"
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
        }
      },
      dark:{
        colors:{
         
        }
      },
    }
  })],
}
