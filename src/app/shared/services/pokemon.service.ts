import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { IPokemonData } from '../models/resGetPokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonList: BehaviorSubject<IPokemonData[]> = new BehaviorSubject<IPokemonData[]>([]);

  private favoriteListArray: IPokemonData[] = [];
  private favoriteList: BehaviorSubject<IPokemonData[]> = new BehaviorSubject<IPokemonData[]>([]);

  constructor() {}

  // pokemon list getter and setter
  getPokemonList() {
    return this.pokemonList.asObservable();
  }

  setPokemonList(listObj: IPokemonData[]) {
    this.pokemonList.next(listObj);
  }

  // favoriteList getter and setter
  getFavorites() {
    return this.favoriteList.asObservable();
  }

  setNewFavorite(pokemon: IPokemonData) {
    this.favoriteListArray.push(pokemon);
    this.favoriteList.next(this.favoriteListArray);
    console.log(this.favoriteList.value)
  }




}
