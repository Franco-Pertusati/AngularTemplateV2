import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/button/button.component";
import { ToDoCardComponent } from "../../../../shared/to-do-card/to-do-card.component";

@Component({
  selector: 'app-daily-tasks',
  standalone: true,
  imports: [ButtonComponent, ToDoCardComponent],
  templateUrl: './daily-tasks.component.html',
  styleUrl: './daily-tasks.component.css'
})
export class DailyTasksComponent {

}
