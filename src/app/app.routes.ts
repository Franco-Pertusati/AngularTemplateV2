import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docs',
    loadChildren: () => import('./modules/docs/docs.routes').then(m => m.docsRoutes)
  }
];
