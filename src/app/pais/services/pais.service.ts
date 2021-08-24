import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.eu/rest/v2';
  
  get httpParams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor( private http: HttpClient) { 
    
  }

  buscarPais( pais: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ pais }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarCapital( capital: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ capital }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha ( id: string ) : Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

}
