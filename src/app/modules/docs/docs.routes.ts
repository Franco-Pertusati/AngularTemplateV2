import { Routes } from "@angular/router";
import { DocsComponent } from "./docs.component";
import { AcordeonDocComponent } from "./pages/acordeon-doc/acordeon-doc.component";

export const docsRoutes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: 'accordion-group', component: AcordeonDocComponent },
      // { path: 'nav', component: NavPageComponent },
      // { path: 'forms', component: FormsComponent },
      // { path: 'toast', component: ToastDocComponent },
      // { path: 'sidebar',  component: SidebarDocComponent},
      // { path: 'dropdown',  component: DropDownDocComponent},
      // { path: 'acordeon',  component: AcordeonDocComponent},
      // { path: 'feature-card',  component: FeatureCardDocComponent},
      { path: '', redirectTo: 'accordion-group', pathMatch: 'full' }
    ]
  }
];
