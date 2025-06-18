import { Component } from '@angular/core';
import { TerminalInfoComponent } from "../../../shared/terminal-info/terminal-info.component";
import { InputTableComponent } from "../../../shared/input-table/input-table.component";
import { PromiseBtnComponent } from "../../../shared/promise-btn/promise-btn.component";

@Component({
  selector: 'app-promise-btn-doc',
  standalone: true,
  imports: [TerminalInfoComponent, InputTableComponent, PromiseBtnComponent],
  templateUrl: './promise-btn-doc.component.html',
  styleUrl: './promise-btn-doc.component.css'
})
export class PromiseBtnDocComponent {

}
