import { Routes } from "@angular/router";
import { DocsComponent } from "./docs.component";
import { AcordeonDocComponent } from "./pages/acordeon-doc/acordeon-doc.component";
import { ToastDocComponent } from "./pages/toast-doc/toast-doc.component";
import { CopybtnDocComponent } from "./pages/copybtn-doc/copybtn-doc.component";
import { PromiseBtnDocComponent } from "./pages/promise-btn-doc/promise-btn-doc.component";

export const docsRoutes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: 'accordion-group', component: AcordeonDocComponent },
      { path: 'toast', component: ToastDocComponent },
      { path: 'copy-button', component: CopybtnDocComponent },
      { path: 'promise-button', component: PromiseBtnDocComponent },
      // { path: 'sidebar',  component: SidebarDocComponent},
      // { path: 'dropdown',  component: DropDownDocComponent},
      // { path: 'acordeon',  component: AcordeonDocComponent},
      // { path: 'feature-card',  component: FeatureCardDocComponent},
      { path: '', redirectTo: 'accordion-group', pathMatch: 'full' }
    ]
  }
];
