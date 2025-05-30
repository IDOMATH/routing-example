import { Routes } from "@angular/router";
import {
  canLeaveEditPage,
  NewTaskComponent,
} from "../tasks/new-task/new-task.component";
import { TasksComponent } from "../tasks/tasks.component";

export const routes: Routes = [
  { path: "", redirectTo: "tasks", pathMatch: "prefix" },
  {
    path: "tasks",
    component: TasksComponent,
    // loadComponent: () =>
    //   import("../tasks/tasks.component").then((mod) => mod.TasksComponent),
  },
  {
    path: "tasks/new",
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];
