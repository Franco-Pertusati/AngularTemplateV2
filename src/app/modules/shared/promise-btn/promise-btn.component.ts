import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promise-btn',
  standalone: true,
  imports: [NgClass, CommonModule],
  templateUrl: './promise-btn.component.html',
  styleUrl: './promise-btn.component.css'
})
export class PromiseBtnComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() label: string = 'Action';
  @Input() showLabel: boolean = true;
  @Input() icon: string = 'check'
  @Input() showIcon: boolean = true;
  @Input() notifications: number = 0;
  @Input() style: string = '';
}
