import { Component, HostListener } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ButtonComponent, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isScrolled = false;
  isNavbarClosed = true;
}
