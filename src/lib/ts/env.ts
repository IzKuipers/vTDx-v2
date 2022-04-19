import { writable } from "svelte/store";
import type { Module } from "./page";

export const currentModule = writable<Module>();
export const urlParams = new URLSearchParams(location.search);
export const sideBarCollapsed = writable<boolean>(true);