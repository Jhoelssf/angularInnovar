import { Injectable, EventEmitter } from '@angular/core';
import { PokemonObject } from '../models/pokemonObj';

@Injectable({
  providedIn: 'root'
})
export class FavoritesServiceService {
  pokemonLista: PokemonObject[] = []
  seAgregoCarta: EventEmitter<PokemonObject> = new EventEmitter<PokemonObject>();

  constructor() { }

  agregarCarta(carta: PokemonObject){
    this.pokemonLista.push(carta)
    this.seAgregoCarta.emit(carta)
  }
}
