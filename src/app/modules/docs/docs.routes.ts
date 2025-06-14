import { Routes } from "@angular/router";
import { DocsComponent } from "./docs.component";
import { AcordeonDocComponent } from "./pages/acordeon-doc/acordeon-doc.component";
import { ToastDocComponent } from "./pages/toast-doc/toast-doc.component";
import { CopyButtonComponent } from "./pages/copy-button/copy-button.component";

export const docsRoutes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: 'accordion-group', component: AcordeonDocComponent },
      { path: 'toast', component: ToastDocComponent },
      { path: 'copy-button', component: CopyButtonComponent },
      // { path: 'forms', component: FormsComponent },
      // { path: 'sidebar',  component: SidebarDocComponent},
      // { path: 'dropdown',  component: DropDownDocComponent},
      // { path: 'acordeon',  component: AcordeonDocComponent},
      // { path: 'feature-card',  component: FeatureCardDocComponent},
      { path: '', redirectTo: 'accordion-group', pathMatch: 'full' }
    ]
  }
];
