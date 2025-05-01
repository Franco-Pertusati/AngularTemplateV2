import { Component } from '@angular/core';
import { ThemeBtnComponent } from "../shared/theme-btn/theme-btn.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThemeBtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
