import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { CommonModule } from '@angular/common';
import { ThemeBtnComponent } from "../../../shared/theme-btn/theme-btn.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ThemeBtnComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isClosed: boolean = false;
  selectedBtn: number = 0;
  @Input() buttonList = [
    {
      style: 'wfull',
      icon: 'home',
      label: 'home',
    },
    {
      style: 'wfull',
      icon: 'person',
      label: 'users',
    },
    {
      style: 'wfull',
      icon: 'category',
      label: 'categories',
    },
    {
      style: 'wfull',
      icon: 'settings',
      label: 'settings',
    },
  ];

  selectBtn(index: number) {
    this.selectedBtn = index;
  }

  isSelected(index: number) {
    return this.selectedBtn === index;
  }
}
