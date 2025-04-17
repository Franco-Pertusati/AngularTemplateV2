import { Component } from '@angular/core';
import { DocsComponent } from "./modules/docs/docs.component";
import { ThemeBtnComponent } from "./modules/shared/theme-btn/theme-btn.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DocsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
