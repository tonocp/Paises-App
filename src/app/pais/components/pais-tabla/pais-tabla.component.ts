import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-pais-tabla',
    templateUrl: './pais-tabla.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PaisTablaComponent {
  @Input() paises: Country[] = [];

  constructor() {}
}
