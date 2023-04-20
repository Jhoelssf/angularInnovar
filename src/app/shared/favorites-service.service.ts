import { Injectable, EventEmitter } from '@angular/core';
import { PokemonObject } from '../models/pokemonObj';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesServiceService {
  pokemonLista: PokemonObject[] = [];
  pokemonFavorito$: BehaviorSubject<PokemonObject[]> = new BehaviorSubject<PokemonObject[]>(this.pokemonLista);
  
  constructor() { }
  
  addFavoritePokemon(poke: PokemonObject){
    this.pokemonLista.push(poke)
    this.pokemonFavorito$.next(this.pokemonLista);
  }

  getFavoritePokemon(){
    return this.pokemonFavorito$.asObservable();
  }


  // agregarCarta(carta: PokemonObject){
  //   this.pokemonSubject.next(carta);
  //   this.pokemonLista.push(carta)
  //   this.seAgregoCarta.emit(carta)
  // }

  // getCarta(){
  //   return this.pokemonSubject.asObservable();
  // }
}
