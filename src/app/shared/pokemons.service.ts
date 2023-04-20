import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private favoritePokemons: RootObject[] = [];
  private favoritePokemons$: BehaviorSubject<RootObject[]> =
    new BehaviorSubject<RootObject[]>(this.favoritePokemons);
  constructor() {}

  addFavoritePokemon(pokemon: RootObject) {
    this.favoritePokemons.push(pokemon);
    this.favoritePokemons$.next(this.favoritePokemons);
  }

  getFavoritePokemon() {
    this.favoritePokemons$.asObservable();
  }
}
