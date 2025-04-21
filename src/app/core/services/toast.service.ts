import { Injectable, signal, WritableSignal } from '@angular/core';

export interface ToastNotification {
  title: string | undefined;
  message: string;
  icon: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastList: WritableSignal<ToastNotification[]> = signal([])

  succes(title: string | undefined, message: string) {
    const newToast: ToastNotification = {
      title: title,
      message: message,
      icon: 'check',
    }
    this.toastList().push(newToast)
    console.log(this.toastList())
    setTimeout(() => {
      this.removeToast(newToast)
    }, 10500);
  }

  removeToast(toast: ToastNotification) {
    const index = this.toastList().indexOf(toast);
    if (index > -1) {
      this.toastList().splice(index, 1);
    }
  }
}
