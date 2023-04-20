import { Injectable } from '@angular/core';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonFavoritesManagementService {
  private arrFavPokemon : RootObject[] = [];
  arrFavPokemon$ : BehaviorSubject<RootObject[]> = new BehaviorSubject(this.arrFavPokemon);
  constructor() {}

  addPokemonToFav(objPokemon: RootObject){
    console.log('Pokemon añadido a favoritos!!!')
    console.log(objPokemon);
    this.arrFavPokemon.push(objPokemon);
    this.arrFavPokemon$.next(this.arrFavPokemon);
  }
}
