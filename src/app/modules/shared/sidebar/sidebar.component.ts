import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { ThemeBtnComponent } from "../theme-btn/theme-btn.component";
import { Router } from '@angular/router';
import { MenuButtonGroup } from './buttonsList';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isClosed: boolean = false;
  @Input() title: string = ''
  @Input() rooteRoute: string = ''
  @Input() toggleBtn: boolean = true;
  @Input() buttonList: MenuButtonGroup[] = [
    {
      name: 'Group 1',
      buttons: [
        {
          label: 'Button 1',
          route: '',
          icon: ''
        },
        {
          label: 'Button 2',
          route: '',
          icon: ''
        }
      ]
    },
    {
      name: 'Group 2',
      buttons: [
        {
          label: 'Button 1',
          route: '',
          icon: ''
        },
        {
          label: 'Button 2',
          route: '',
          icon: ''
        }
      ]
    }
  ];

  constructor(private router: Router) { }


  isRouteActive(route: string | undefined): boolean {
    if (!route) return false;
    if (this.router.url.includes(route)) return true;
    else return false
  }
}
