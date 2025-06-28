import { Component } from '@angular/core';
import { InputTableComponent } from "../../../shared/input-table/input-table.component";
import { TerminalInfoComponent } from "../../../shared/terminal-info/terminal-info.component";
import { ToggleVisibilityComponent } from "../../../shared/toggle-visibility/toggle-visibility.component";

@Component({
  selector: 'app-toggle-visibility-doc',
  standalone: true,
  imports: [InputTableComponent, TerminalInfoComponent, ToggleVisibilityComponent],
  templateUrl: './toggle-visibility-doc.component.html',
  styleUrl: './toggle-visibility-doc.component.css'
})
export class ToggleVisibilityDocComponent {

}
