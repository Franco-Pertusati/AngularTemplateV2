import { Component } from '@angular/core';
import { NavBarComponent } from "../../../shared/nav-bar/nav-bar.component";

@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css'
})
export class NavPageComponent {

}
