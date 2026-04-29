import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        solar: { green: "#138A36", deep: "#0B5D2A", soft: "#EAF7EF", yellow: "#F6C343" }
      },
      boxShadow: { soft: "0 18px 50px rgba(16,24,40,.08)" }
    }
  },
  plugins: []
};
export default config;
