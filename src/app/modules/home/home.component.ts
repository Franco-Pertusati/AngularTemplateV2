import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";
import { DropdownComponent } from "../shared/dropdown/dropdown.component";
import { AcordeonComponent } from "../shared/acordeon/acordeon.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, AcordeonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
