import { Component, computed, Signal } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  toastList = computed(() => this.toastService.toastList());

  constructor(private toastService: ToastService) {}
}
