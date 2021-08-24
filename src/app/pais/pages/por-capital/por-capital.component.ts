import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private PaisService: PaisService) { }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.PaisService.buscarCapital(this.termino)
      .subscribe( (paises) => {
        this.paises = paises;
      ;
        
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }  

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.PaisService.buscarCapital(termino)
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []);

  }

  buscarSugerido ( termino: string ) {
    this.buscar(termino);
    
  }

}
