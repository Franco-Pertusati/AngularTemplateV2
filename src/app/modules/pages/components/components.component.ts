import { Component } from '@angular/core';
import { ThemeBtnComponent } from "../../shared/theme-btn/theme-btn.component";
import { ButtonsShowcaseComponent } from "./buttons-showcase/buttons-showcase.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TableListComponent } from "./table-list/table-list.component";
import { CardInterfaseDemostrationComponent } from "./card-interfase-demostration/card-interfase-demostration.component";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [ThemeBtnComponent, ButtonsShowcaseComponent, SidebarComponent, TableListComponent, CardInterfaseDemostrationComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {

}
