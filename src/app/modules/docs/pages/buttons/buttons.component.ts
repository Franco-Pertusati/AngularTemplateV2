import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { CTABtnComponent } from "../../../shared/cta-btn/cta-btn.component";

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonComponent, CTABtnComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
