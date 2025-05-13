import { Routes } from "@angular/router";
import { DocsComponent } from "./docs.component";
import { ButtonsComponent } from "./pages/buttons/buttons.component";
import { FormsComponent } from "./pages/forms/forms.component";
import { ToastDocComponent } from "./pages/toast-doc/toast-doc.component";
import { FeatureCardDocComponent } from "./pages/feature-card-doc/feature-card-doc.component";
import { SidebarDocComponent } from "./pages/sidebar-doc/sidebar-doc.component";
import { DropDownDocComponent } from "./pages/drop-down-doc/drop-down-doc.component";
import { AcordeonDocComponent } from "./pages/acordeon-doc/acordeon-doc.component";
import { NavPageComponent } from "./pages/nav-page/nav-page.component";

export const docsRoutes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'nav', component: NavPageComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'toast', component: ToastDocComponent },
      { path: 'sidebar',  component: SidebarDocComponent},
      { path: 'dropdown',  component: DropDownDocComponent},
      { path: 'acordeon',  component: AcordeonDocComponent},
      { path: 'feature-card',  component: FeatureCardDocComponent},
      { path: '', redirectTo: 'buttons', pathMatch: 'full' }
    ]
  }
];
