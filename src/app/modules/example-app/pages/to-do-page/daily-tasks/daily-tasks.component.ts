import { Component } from '@angular/core';
import { ButtonComponent } from "../../../../shared/button/button.component";
import { ToDoCardComponent } from "../../../../shared/to-do-card/to-do-card.component";

export interface ToDo {
  id: number,
  title: string,
  complete: boolean,
  deadLine: number | null
}

@Component({
  selector: 'app-daily-tasks',
  standalone: true,
  imports: [ButtonComponent, ToDoCardComponent],
  templateUrl: './daily-tasks.component.html',
  styleUrl: './daily-tasks.component.css'
})
export class DailyTasksComponent {
  todos: ToDo[] = [
    { id: 1, title: "Finish report", complete: true, deadLine: 1714780400000 },
    { id: 2, title: "Book flight tickets", complete: false, deadLine: 1715395200000 },
    { id: 3, title: "Call plumber", complete: true, deadLine: null },
    { id: 4, title: "Buy groceries", complete: false, deadLine: 1715136000000 },
    { id: 5, title: "Schedule dentist appointment", complete: false, deadLine: 1715222400000 },
    { id: 6, title: "Submit tax documents", complete: false, deadLine: null },
    { id: 7, title: "Organize files", complete: true, deadLine: 1714963200000 },
    { id: 8, title: "Plan weekend trip", complete: false, deadLine: 1715577600000 },
    { id: 9, title: "Read a book", complete: true, deadLine: null }
  ]

  changeTodoState(event: boolean, id: number) {
    const todoToUpdate = this.todos.find(t => t.id === id)

    if (todoToUpdate) {
      todoToUpdate.complete = event
    }
  }
}
