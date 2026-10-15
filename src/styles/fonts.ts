import { Barlow_Condensed, DM_Sans } from "next/font/google";

export const fontDisplay = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

export const fontSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-sans",
});
