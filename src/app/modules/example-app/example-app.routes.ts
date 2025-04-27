import { Routes } from "@angular/router";
import { ExampleAppComponent } from "./example-app.component";
import { ToDoPageComponent } from "./pages/to-do-page/to-do-page.component";
import { DailyTasksComponent } from "./pages/to-do-page/daily-tasks/daily-tasks.component";

export const exampleAppRoute: Routes = [
  {
    path: '',
    component: ExampleAppComponent,
    children: [
      { path: '', redirectTo: 'to-do-lists', pathMatch: 'full' },
      {
        path: 'to-do-lists', component: ToDoPageComponent, children: [
          {
            path: '', redirectTo: 'daily-tasks', pathMatch: "full"
          },
          {
            path: 'daily-tasks', component: DailyTasksComponent
          }
        ]
      }
    ]
  }
];
