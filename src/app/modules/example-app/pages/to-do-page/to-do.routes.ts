import { Routes } from "@angular/router";
import { ToDoPageComponent } from "./to-do-page.component";
import { DailyTasksComponent } from "./daily-tasks/daily-tasks.component";

export const exampleAppRoute: Routes = [
  {
    path: '',
    component: ToDoPageComponent,
    children: [
      { path: '**', redirectTo: 'daily-tasks', pathMatch: 'full' },
      { path: 'daily-tasks', component: DailyTasksComponent }
    ]
  }
];
