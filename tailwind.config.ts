import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFFFFF",
        "primary-1": "363738",
        secondary: "#F5F5F5",
        "secondary-1": "#FEFAF1",
        "secondary-2": "#DB4444",
        bg: "#FFFFFF",
        text: "#FAFAFA",
        "text-1": "#7D8184",
        "text-2": "#000000",
        button: "000000",
        "button-1": "#00FF66",
        "button-2": "#DB4444",
        "hover-button": "#E07575",
        "hover-button-1": "#A0BCE0",
      },
      fontFamily: {
        heading: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
