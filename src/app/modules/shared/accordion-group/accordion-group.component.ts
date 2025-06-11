import { Component } from '@angular/core';
import { AcordeonComponent } from "../acordeon/acordeon.component";

@Component({
  selector: 'app-accordion-group',
  standalone: true,
  imports: [AcordeonComponent],
  templateUrl: './accordion-group.component.html',
  styleUrl: './accordion-group.component.css'
})
export class AccordionGroupComponent {
  group = [
    {
      label: 'Acordion 1',
      icon: 'question_mark',
      contentHeight: 120,
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugiat perspiciatis saepe tempora nisi magni esse facilis sunt quisquam numquam. Dolore nisi et molestiae, accusantium culpa quo consectetur itaque esse?',
      isOpen: false
    },
    {
      label: 'Acordion 2',
      icon: 'question_mark',
      contentHeight: 120,
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugiat perspiciatis saepe tempora nisi magni esse facilis sunt quisquam numquam. Dolore nisi et molestiae, accusantium culpa quo consectetur itaque esse?',
      isOpen: false
    },
    {
      label: 'Acordion 3',
      icon: 'question_mark',
      contentHeight: 120,
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti fugiat perspiciatis saepe tempora nisi magni esse facilis sunt quisquam numquam. Dolore nisi et molestiae, accusantium culpa quo consectetur itaque esse?',
      isOpen: false
    }
  ]

  closeOthers(index: number) {
    for (let i = 0; i < this.group.length; i++) {
      this.group[i].isOpen = (i === index);
    }
  }
}
