import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-cta-btn',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cta-btn.component.html',
  styleUrl: './cta-btn.component.css'
})
export class CTABtnComponent {

}
