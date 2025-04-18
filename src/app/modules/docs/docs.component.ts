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
      icon: 'keyboard',
      style: 'wfull',
      routerLink: 'buttons',
    },
    {
      label: 'form',
      icon: 'password',
      style: 'wfull',
      routerLink: 'forms',
    },
    {
      label: 'toast',
      icon: 'bolt',
      style: 'wfull',
      routerLink: 'toast',
    },
    {
      label: 'feature card',
      icon: 'group',
      style: 'wfull',
      routerLink: 'feature-card',
    },
    {
      label: 'sidebar',
      icon: 'dock',
      style: 'wfull',
      routerLink: 'sidebar'
    },
  ]
}
