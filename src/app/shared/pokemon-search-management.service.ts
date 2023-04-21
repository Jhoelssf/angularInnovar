import { Injectable } from '@angular/core';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RootObjectPokeList } from './pokeListTemplate';
@Injectable({
  providedIn: 'root',
})
export class PokemonSearchManagementService {
  private resultSearchPokemon: RootObject[] = [];
  resultSearchPokemon$: BehaviorSubject<RootObject[]> = new BehaviorSubject(
    this.resultSearchPokemon
  );
  private listPokeNames: string[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<RootObjectPokeList>(
        'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      )
      .subscribe((pokeList) => {
        pokeList.results.forEach((result) => {
          this.listPokeNames.push(result.name);
        })
        this.listPokeNames = this.listPokeNames.splice(0,1007);
      });
  }

  setSearchPokemonResult(pokemonPartialName: string) {
    pokemonPartialName = pokemonPartialName.toLowerCase();
    this.resultSearchPokemon = [];

    let pokemonResulNames = this.listPokeNames.filter((pokemonName) => {
      return pokemonName.includes(pokemonPartialName);
    });
    console.log(pokemonResulNames);
    for (let i = 0 ; i < pokemonResulNames.length; i++) {
      this.http.get<RootObject>(`https://pokeapi.co/api/v2/pokemon/${pokemonResulNames[i]}`).
      subscribe(response =>
        this.resultSearchPokemon[i] = response
    )}
    this.resultSearchPokemon$.next(this.resultSearchPokemon);
  }
}
