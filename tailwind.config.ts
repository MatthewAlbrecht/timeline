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
        timeline3: "100px 5px 150px 150px 150px",
        timeline4: "100px 5px 150px 150px 150px 150px",
        timeline5: "100px 5px 150px 150px 150px 150px 150px",
        timeline6: "100px 5px 150px 150px 150px 150px 150px 150px",
        timeline7: "100px 5px 150px 150px 150px 150px 150px 150px 150px",
      },
      transitionProperty: {
        height: "height",
      },
      //row spans from 1 to 100
      gridRow: {
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
        "span-25": "span 25 / span 25",
        "span-26": "span 26 / span 26",
        "span-27": "span 27 / span 27",
        "span-28": "span 28 / span 28",
        "span-29": "span 29 / span 29",
        "span-30": "span 30 / span 30",
        "span-31": "span 31 / span 31",
        "span-32": "span 32 / span 32",
        "span-33": "span 33 / span 33",
        "span-34": "span 34 / span 34",
        "span-35": "span 35 / span 35",
        "span-36": "span 36 / span 36",
        "span-37": "span 37 / span 37",
        "span-38": "span 38 / span 38",
        "span-39": "span 39 / span 39",
        "span-40": "span 40 / span 40",
        "span-41": "span 41 / span 41",
        "span-42": "span 42 / span 42",
        "span-43": "span 43 / span 43",
        "span-44": "span 44 / span 44",
        "span-45": "span 45 / span 45",
        "span-46": "span 46 / span 46",
        "span-47": "span 47 / span 47",
        "span-48": "span 48 / span 48",
        "span-49": "span 49 / span 49",
        "span-50": "span 50 / span 50",
        "span-51": "span 51 / span 51",
        "span-52": "span 52 / span 52",
        "span-53": "span 53 / span 53",
        "span-54": "span 54 / span 54",
        "span-55": "span 55 / span 55",
        "span-56": "span 56 / span 56",
        "span-57": "span 57 / span 57",
        "span-58": "span 58 / span 58",
        "span-59": "span 59 / span 59",
        "span-60": "span 60 / span 60",
        "span-61": "span 61 / span 61",
        "span-62": "span 62 / span 62",
        "span-63": "span 63 / span 63",
        "span-64": "span 64 / span 64",
        "span-65": "span 65 / span 65",
        "span-66": "span 66 / span 66",
        "span-67": "span 67 / span 67",
        "span-68": "span 68 / span 68",
        "span-69": "span 69 / span 69",
        "span-70": "span 70 / span 70",
        "span-71": "span 71 / span 71",
        "span-72": "span 72 / span 72",
        "span-73": "span 73 / span 73",
        "span-74": "span 74 / span 74",
        "span-75": "span 75 / span 75",
        "span-76": "span 76 / span 76",
        "span-77": "span 77 / span 77",
        "span-78": "span 78 / span 78",
        "span-79": "span 79 / span 79",
        "span-80": "span 80 / span 80",
        "span-81": "span 81 / span 81",
        "span-82": "span 82 / span 82",
        "span-83": "span 83 / span 83",
        "span-84": "span 84 / span 84",
        "span-85": "span 85 / span 85",
        "span-86": "span 86 / span 86",
        "span-87": "span 87 / span 87",
        "span-88": "span 88 / span 88",
        "span-89": "span 89 / span 89",
        "span-90": "span 90 / span 90",
        "span-91": "span 91 / span 91",
        "span-92": "span 92 / span 92",
        "span-93": "span 93 / span 93",
        "span-94": "span 94 / span 94",
        "span-95": "span 95 / span 95",
        "span-96": "span 96 / span 96",
        "span-97": "span 97 / span 97",
        "span-98": "span 98 / span 98",
        "span-99": "span 99 / span 99",
        "span-100": "span 100 / span 100",
      },
    },
  },
  plugins: [],
} satisfies Config;
