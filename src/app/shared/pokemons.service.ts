import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  favoritePokemons: RootObject[] = [];
  favoritePokemons$: BehaviorSubject<RootObject[]> =
    new BehaviorSubject<RootObject[]>(this.favoritePokemons);

  constructor() { }

  addFavoritePokemon(pokemon: RootObject) {
    this.favoritePokemons.push(pokemon);
    this.favoritePokemons$.next(this.favoritePokemons);
  }

  deleteFavoritePokemon(pokemon: RootObject) {
    this.favoritePokemons =  this.favoritePokemons.filter(item => item !== pokemon);
    this.favoritePokemons$.next(this.favoritePokemons);
  }

  getFavoritePokemon() {
    this.favoritePokemons$.asObservable();
  }
}
