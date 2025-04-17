import { Component } from '@angular/core';
import { SidebarComponent } from "../pages/components/sidebar/sidebar.component";
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
      routerLink: 'dining-area',
    },
    {
      label: 'toast',
      icon: 'bolt',
      style: 'wfull',
      routerLink: 'bolt',
    },
    {
      label: 'feature card',
      icon: 'group',
      style: 'wfull',
      routerLink: 'users',
    },
    {
      label: 'sidebar',
      icon: 'dock',
      style: 'wfull',
      routerLink: 'start-shift'
    },
    {
      label: 'Table list',
      icon: 'view_list',
      style: 'wfull',
      routerLink: 'shift-history'
    },
  ]
}
