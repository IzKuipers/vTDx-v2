// Page Imports
import FinishedTasks from "../ui/page/FinishedTasks.svelte";
import Home from "../ui/page/Home.svelte";
import Notes from "../ui/page/Notes.svelte";
import PinnedNotes from "../ui/page/PinnedNotes.svelte";
import Tasks from "../ui/page/Tasks.svelte";
import UnfinishedTasks from "../ui/page/UnfinishedTasks.svelte";

import { currentModule } from "./env";

export function openModule(moduleName: string) {
  if (Modules.has(moduleName)) {
      console.log(`page: openModule: Opening ${moduleName}`)
    currentModule.set(Modules.get(moduleName));
  }
}

export enum ModuleAccessorPosition {
  none,
  topbar,
  leftbar,
}

export const Modules = new Map<string, Module>([
  [
    "home",
    {
      name: "Home",
      icon: "home",
      content: Home,
      accessorPos: ModuleAccessorPosition.topbar,
    },
  ],[
    "notes",
    {
      name: "All Notes",
      icon: "description",
      content: Notes,
      accessorPos: ModuleAccessorPosition.leftbar,
    },
  ],[
    "pinnednotes",
    {
      name: "Pinned Notes",
      icon: "bookmark",
      content: PinnedNotes,
      accessorPos: ModuleAccessorPosition.leftbar,
    },
  ],[
    "tasks",
    {
      name: "All Tasks",
      icon: "insert_drive_file",
      content: Tasks,
      accessorPos: ModuleAccessorPosition.leftbar,
    },
  ],[
    "unfinishedtasks",
    {
      name: "Unfinished Tasks",
      icon: "file_open",
      content: UnfinishedTasks,
      accessorPos: ModuleAccessorPosition.leftbar,
    },
  ],[
    "finishedtasks",
    {
      name: "Finished Tasks",
      icon: "task",
      content: FinishedTasks,
      accessorPos: ModuleAccessorPosition.leftbar,
    },
  ],
]);

export interface Module {
  name: string;
  icon: string;
  content: any;
  accessorPos: ModuleAccessorPosition;
}
