import { Component } from '@angular/core';
import { InputTableComponent } from "../../../shared/input-table/input-table.component";
import { TerminalInfoComponent } from "../../../shared/terminal-info/terminal-info.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { CoppyTextComponent } from '../../../shared/coppy-text/coppy-text.component';

@Component({
  selector: 'app-copybtn-doc',
  standalone: true,
  imports: [InputTableComponent, TerminalInfoComponent, CoppyTextComponent],
  templateUrl: './copybtn-doc.component.html',
  styleUrl: './copybtn-doc.component.css'
})
export class CopybtnDocComponent {

}
