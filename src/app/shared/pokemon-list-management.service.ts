import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';

@Injectable({
  providedIn: 'root'
})
export class PokemonListManagementService {
  private pokemonList : RootObject[] = [];
  pokemonList$ : BehaviorSubject<RootObject[]> = new BehaviorSubject(this.pokemonList)

  constructor(private http: HttpClient) {

  }

  generatePokemonList(InitialID: string = '0', cantPokemons: string = '50'){
    let consultaAPi = `https://pokeapi.co/api/v2/pokemon/`;
    let Initial = parseInt(InitialID)+1;
    let Limit = Initial + parseInt(cantPokemons);
    console.log('SERVICIO-->');
    console.log('Inicio -> ', Initial);
    console.log('Limit ->', Limit);
    this.pokemonList = [];
    for (let i = Initial ; i < Limit; i++) {
      this.http.get<RootObject>(`${consultaAPi}${i}`).
      subscribe(response =>
        this.pokemonList[i] = response);
    }
    this.pokemonList$.next(this.pokemonList);
    console.log(this.pokemonList)
  }

  getPokemonList$(){
    //return this.pokemonList$;
    console.log(this.generatePokemonList);
    
  }
}
