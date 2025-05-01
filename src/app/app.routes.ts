import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: 'docs',
    loadChildren: () => import('./modules/docs/docs.routes').then(m => m.docsRoutes)
  },
  {
    path: 'example-app',
    loadChildren: () => import('./modules/example-app/example-app.routes').then(m => m.exampleAppRoute)
  },
  {
    path: '',
    component: HomeComponent
  }
];
