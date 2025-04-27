import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-to-do-page',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './to-do-page.component.html',
  styleUrl: './to-do-page.component.css'
})
export class ToDoPageComponent {
  dockBtns = [
    {

    }
  ]
}
