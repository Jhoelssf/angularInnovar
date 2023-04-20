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
    const index = this.pokemonLista.findIndex((ele:PokemonObject) => ele.id === poke.id); // Verificamos si el elemento ya existe en el array
    if (index === -1) {
      this.pokemonLista.push(poke)
    } else {
      console.log('El elemento ya existe en el array'); // Si existe, mostramos un mensaje de error
    }
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
