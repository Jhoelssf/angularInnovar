import { Injectable } from '@angular/core';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonFavoritesManagementService {
  private arrFavPokemon: RootObject[] = [];
  arrFavPokemon$: BehaviorSubject<RootObject[]> = new BehaviorSubject(
    this.arrFavPokemon
  );
  constructor() {}

  addPokemonToFav(objPokemon: RootObject) {
    console.log('Pokemon añadido a favoritos!!!');
    console.log(objPokemon);
    this.arrFavPokemon.push(objPokemon);
    this.arrFavPokemon$.next(this.arrFavPokemon);
  }

  comprobeIfItsFavorite(objPokemon: RootObject) {
    return this.arrFavPokemon.includes(objPokemon);
  }

  deletePokemonToFav(objPokemon: RootObject) {
    let index = this.arrFavPokemon.findIndex((favPoke) => favPoke.id ===objPokemon.id);
    index !== -1? this.arrFavPokemon.splice(index, 1): console.log('Try delete from favorites pokemon failed');
    this.arrFavPokemon$.next(this.arrFavPokemon);
  }
}
