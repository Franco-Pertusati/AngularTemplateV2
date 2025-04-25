import { Component } from '@angular/core';
import { SidebarComponent } from "../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-sidebar-doc',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './sidebar-doc.component.html',
  styleUrl: './sidebar-doc.component.css'
})
export class SidebarDocComponent {

}
