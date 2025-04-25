import { Component } from '@angular/core';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, ButtonComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {
  menuList = [
    {
      label: 'buttons',
      icon: '',
      style: 'wfull',
      routerLink: 'buttons',
    },
    {
      label: 'form',
      icon: '',
      style: 'wfull',
      routerLink: 'forms',
    },
    {
      label: 'toast',
      icon: '',
      style: 'wfull',
      routerLink: 'toast',
    },
    {
      label: 'sidebar',
      icon: '',
      style: 'wfull',
      routerLink: 'sidebar',
    },
    {
      label: 'dropdown',
      icon: '',
      style: 'wfull',
      routerLink: 'dropdown',
    },
    {
      label: 'acordeon',
      icon: '',
      style: 'wfull',
      routerLink: 'acordeon',
    },
    {
      label: 'feature card',
      icon: '',
      style: 'wfull',
      routerLink: 'feature-card',
    },
  ]
}
