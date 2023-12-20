import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        timeline: "100px 5px 250px 250px 250px",
      },
    },
  },
  plugins: [],
} satisfies Config;
