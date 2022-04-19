import { writable } from "svelte/store";
import type { Module } from "./page";
import type { Theme } from "./theme";
import { themeStore } from "./themeStore";

export const currentModule = writable<Module>();
export const urlParams = new URLSearchParams(location.search);
export const sideBarCollapsed = writable<boolean>(true);
export const currentTheme = writable<Theme>(themeStore.get("gruvboxlight"));