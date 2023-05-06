import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FetchPokemonResponse, Pokemon } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //pasamos el endpoint
  private url: string = 'https://pokeapi.co/api/v2';
  //permite hacer peticiones
  constructor(private http: HttpClient) { }


  getAllPokemons( ): Observable<Pokemon[]>  {
    //definicion de observable. regresar la info hasta que alguien se sesbriba
    return this.http.get<FetchPokemonResponse>(`${this.url}/pokemon?limit=1500`)
          .pipe(
            map( this.transformSmallPokemonintoPokemon)
          )
  }
  private transformSmallPokemonintoPokemon(resp: FetchPokemonResponse): Pokemon[]{
    const pokemonList: Pokemon[] = resp.results.map(poke => {
      const urlArr = poke.url.split('/');
      const id = urlArr[6];
      const urlPicture= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
      

      return {
        id,
        name: poke.name,
        picture: urlPicture,

      }
    })
    return pokemonList
  }
}
