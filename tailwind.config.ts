import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Chemre_italic: ['Chemre_italic', 'sans-serif'],
        FuturaPT_book: ['FuturaPT_book', 'sans-serif'],
      },
      fontSize: {
        max : '7rem',
        title : '3rem',
        subtitle : '1.5rem',
        normal : '1rem',
      },
    },
  },

  plugins: [],
} satisfies Config;
