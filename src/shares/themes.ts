import { SelectOption } from "@public-ui/components";

export type Theme =
  | "default"
  | "bamf"
  | "bmf"
  | "bpa"
  | "bzst"
  | "desy-v1"
  | "desy-v2"
  | "ecl-ec"
  | "ecl-eu"
  | "itzbund"
  | "mapz"
  | "th"
  | "zoll-v2";

export const THEME_OPTIONS: SelectOption<Theme>[] = [
  {
    label: "Basis-Styling (KoliBri)",
    value: "default"
  },
  {
    label: "BMF-Styleguide",
    value: "bmf"
  },
  {
    label: "BPA-Styleguide (WIP)",
    value: "bpa"
  },
  {
    label: "BZSt-Styleguide (WIP)",
    value: "bzst"
  },
  {
    label: "DESY-Styleguide (v1)",
    value: "desy-v1"
  },
  {
    label: "DESY-Styleguide (v2, WIP)",
    value: "desy-v2"
  },
  {
    label: "Europa Component Library (EC, WIP)",
    value: "ecl-ec"
  },
  {
    label: "Europa Component Library (EU, WIP)",
    value: "ecl-eu"
  },
  {
    label: "ITZBund-Styleguide",
    value: "itzbund"
  },
  {
    label: "MAPZoll-Styleguide",
    value: "mapz"
  },
  {
    label: "Freistaat Thüringen",
    value: "th"
  },
  {
    label: "ZOLL-Styleguide v2 (WIP)",
    value: "zoll-v2"
  }
];
