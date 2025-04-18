import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-toast-doc',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './toast-doc.component.html',
  styleUrl: './toast-doc.component.css'
})
export class ToastDocComponent {

}
