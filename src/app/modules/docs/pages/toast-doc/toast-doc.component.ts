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
    this.toast.default('An event has occurred')
  }

  openDescriptionToast() {
    this.toast.description('Toast title', 'Description of a event')
  }

  openSuccesToast() {
    this.toast.succes('An event has occurred successfully')
  }

  openInfoToast() {
    this.toast.info('An event is going to happen')
  }

  openWarningToast() {
    this.toast.warning('An event has a warning')
  }

  openErrorToast() {
    this.toast.error('An event has a error')
  }
}
