import { Component, Input } from '@angular/core';
import { AcordeonComponent } from "../../../shared/acordeon/acordeon.component";
import { InputTableComponent, TableData } from "../../../shared/input-table/input-table.component";
import { TerminalInfoComponent } from "../../../shared/terminal-info/terminal-info.component";
import { AccordionGroupComponent } from "../../../shared/accordion-group/accordion-group.component";

@Component({
  selector: 'app-acordeon-doc',
  standalone: true,
  imports: [AcordeonComponent, InputTableComponent, TerminalInfoComponent, AccordionGroupComponent],
  templateUrl: './acordeon-doc.component.html',
  styleUrl: './acordeon-doc.component.css'
})

export class AcordeonDocComponent {
  inputTable: TableData = {
    table: [
      { cells: ['Input', 'label', 'icon', 'showIcon', 'contentHeight', 'style'] },
      { cells: ['Type', 'string', 'string', 'boolean', 'number', 'string'] },
      {
        cells: [
          'Description',
          'Título del acordeón, siempre visible',
          'Nombre del icono de Google Fonts',
          'Si se muestra un icono o no',
          'Altura del contenido expandible en pixeles',
          'Estilos adicionales para el elemento'
        ]
      }
    ]
  };
}
