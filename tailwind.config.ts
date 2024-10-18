import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        black: '#161616',
        primary: "#F6B846",
        background: "#222222",
        disabled: '#7a7a7a',
        white: '#ffffffe6'
      },
    },
  },
  plugins: [
 
  ],
};
export default config;
