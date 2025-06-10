import { Component, Input } from '@angular/core';

export interface TableData {
  table: Cells[],
}

export interface Cells {
  cells: string[]
}

@Component({
  selector: 'app-input-table',
  standalone: true,
  imports: [],
  templateUrl: './input-table.component.html',
  styleUrl: './input-table.component.css'
})
export class InputTableComponent {
  @Input() tableData: TableData = {
    table: [
      { cells: ['Input', 'label', 'icon', 'showIcon', 'style'] },
      { cells: ['Tipo', 'string', 'string', 'boolean', 'string'] },
      { cells: ['Description', 'Título del acordeón, siempre visible', 'Nombre del icono de Google Fonts', 'Si se muestra un icono o no', 'Estilos adicionales para el elemento'] }
    ]
  };
}
