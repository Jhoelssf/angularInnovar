import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject } from '../cards-module/cards/model_pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private API_pokemon = 'https://pokeapi.co/api/v2/pokemon/';


  constructor(
    private http:HttpClient
  ) { }

  public getPokemon(pokemon:string | number): Observable<any>{
    return this.http.get(`${this.API_pokemon}${pokemon}`);

  }
}
