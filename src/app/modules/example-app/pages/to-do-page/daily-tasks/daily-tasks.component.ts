import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/button/button.component";

@Component({
  selector: 'app-daily-tasks',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './daily-tasks.component.html',
  styleUrl: './daily-tasks.component.css'
})
export class DailyTasksComponent {

}
