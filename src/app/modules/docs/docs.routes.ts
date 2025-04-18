import { Routes } from "@angular/router";
import { DocsComponent } from "./docs.component";
import { ButtonsComponent } from "./pages/buttons/buttons.component";
import { ToastComponent } from "../shared/toast/toast.component";
import { CardInterfaseDemostrationComponent } from "../shared/card-interfase-demostration/card-interfase-demostration.component";
import { FormsComponent } from "./pages/forms/forms.component";
import { ToastDocComponent } from "./pages/toast-doc/toast-doc.component";

export const docsRoutes: Routes = [
  {
    path: '',
    component: DocsComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'forms', component: FormsComponent },
      { path: 'toast', component: ToastDocComponent },
      { path: 'feature-card', component: CardInterfaseDemostrationComponent },
      { path: '', redirectTo: 'buttons', pathMatch: 'full' }
    ]
  }
];
