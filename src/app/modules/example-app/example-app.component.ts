import { Component } from '@angular/core';
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example-app',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './example-app.component.html',
  styleUrl: './example-app.component.css'
})
export class ExampleAppComponent {
  sideBarBtns = [
    {
      label: 'to do',
      icon: 'list',
      style: 'wfull',
      routerLink: 'to-do-lists',
    },
  ]
}
