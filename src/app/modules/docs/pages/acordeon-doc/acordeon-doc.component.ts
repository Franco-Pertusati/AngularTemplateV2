import { Component } from '@angular/core';
import { AcordeonComponent } from "../../../shared/acordeon/acordeon.component";
import { InputTableComponent } from "../../../shared/input-table/input-table.component";
import { TerminalInfoComponent } from "../../../shared/terminal-info/terminal-info.component";

@Component({
  selector: 'app-acordeon-doc',
  standalone: true,
  imports: [AcordeonComponent, InputTableComponent, TerminalInfoComponent],
  templateUrl: './acordeon-doc.component.html',
  styleUrl: './acordeon-doc.component.css'
})

export class AcordeonDocComponent {
  inputTable = [
    [
      'Input',
      'label',
      'icon',
      'showIcon',
      'style',
    ],
    [
      'Tipo',
      'string',
      'string',
      'boolean',
      'string',
    ],
    [
      'Description',
      'Titulo del acordeon, siempre visible',
      'Nombre del icono de Google fonts',
      'Si se muestra un icono o no',
      'Estilos adicionales para el coso',
    ]
  ]
}
