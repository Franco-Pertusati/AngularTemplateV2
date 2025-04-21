import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-toast-doc',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './toast-doc.component.html',
  styleUrl: './toast-doc.component.css'
})
export class ToastDocComponent {
  constructor(private toast: ToastService) {}

  openDefaultToast() {
    this.toast.succes(undefined, 'lorem ipsum pret terere')
  }

  openDescriptionToast() {
  }
}
