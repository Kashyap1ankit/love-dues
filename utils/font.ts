import { Heebo, Signika } from "next/font/google";

export const signika = Signika({
  weight: "500",
  subsets: ["latin-ext"],
});

export const heebo = Heebo({
  weight: "600",
  subsets: ["hebrew"],
});
