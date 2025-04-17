import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-buttons-showcase',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './buttons-showcase.component.html',
  styleUrl: './buttons-showcase.component.css'
})
export class ButtonsShowcaseComponent {

}
