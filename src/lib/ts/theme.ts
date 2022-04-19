import { get } from "svelte/store";
import { currentTheme } from "./env";
import { themeStore } from "./themeStore";

export function getTheme(theme: string, save?: boolean): Theme | null {
  if (themeStore.has(theme)) {
    const Theme = themeStore.get(theme);

    if (save) currentTheme.set(Theme);

    return Theme;
  }
  return null;
}

export function themeListener(cb: (theme: Theme, dark: boolean) => void) {
  cb(get(currentTheme), get(currentTheme).scheme == ColorSchemes.darkmode);
  
  currentTheme.subscribe((v) => cb(v, v.scheme == ColorSchemes.darkmode));
}

export interface Theme {
  name: string;
  author: string;
  colors: ThemeColors;
  userSelectable: boolean;
  default?: boolean;
  scheme: ColorSchemes;
}

export interface ThemeColors {
  red: string;
  green: string;
  yellow: string;
  blue: string;
  purple: string;
  aqua: string;
  orange: string;
  gray: string;
  bg: string;
  fg: string;
  [key: string]: string;
}

export enum ColorSchemes {
  darkmode,
  lightmode,
}
