import { Component } from '@angular/core';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "../shared/button/button.component";
import { MenuButtonGroup } from '../shared/sidebar/buttonsList';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {
  menuList: MenuButtonGroup[] = [
    {
      name: 'Templates',
      buttons: [
        {
          icon: '',
          label: 'Portfolio',
          route: ''
        },
      ]
    },
    {
      name: 'Components',
      buttons: [
        {
          icon: '',
          label: 'Accordion Group',
          route: 'accordion-group'
        },
        {
          icon: '',
          label: 'Marquee',
          route: ''
        },
        {
          icon: '',
          label: 'Toast',
          route: 'wasd'
        },
        {
          icon: '',
          label: 'Scroll Porgress',
          route: 'wasd'
        },
        {
          icon: '',
          label: 'Copy Button',
          route: 'wasd'
        },
        {
          icon: '',
          label: 'Promise Button',
          route: 'wasd'
        },
        {
          icon: '',
          label: 'CTA Button',
          route: 'wasd'
        },
      ]
    },
  ]
}
