import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject } from '../cards-module/cards/model_pokemon';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private API_pokemon = 'https://pokeapi.co/api/v2/pokemon/';
  //variables Para favorites
  favoritePokemons: string[] = [];
  favoritePokemons$: BehaviorSubject<string[]> =
    new BehaviorSubject<string[]>(this.favoritePokemons)



  constructor(
    private http:HttpClient
  ) { }

  public getPokemon(pokemon:string | number): Observable<any>{
    return this.http.get(`${this.API_pokemon}${pokemon}`);

  }
  //Funcion agrgar o borrar
  AddDeleteFavoritePokemon(name_pokemon:string){
    if(this.favoritePokemons.includes(name_pokemon)){
      //si esta incluido, eliminarlo
      this.favoritePokemons = this.favoritePokemons.filter(item => item !== name_pokemon);
    }else{
      //si no esta incluido, agregarlo
      this.favoritePokemons.push(name_pokemon);
    }
    this.favoritePokemons$.next(this.favoritePokemons);
  }

  //funciones para favorites
  addFavoritePokemon(name_pokemon: string){
    //validar ingreso
    this.favoritePokemons.push(name_pokemon);
    this.favoritePokemons$.next(this.favoritePokemons);
  }

  deleteFavoritePokemon(name_pokemon: string){
    this.favoritePokemons = this.favoritePokemons.filter(item => item !== name_pokemon);
    this.favoritePokemons$.next(this.favoritePokemons);
  }

  getFavoritePokemon(){
    this.favoritePokemons$.asObservable();
  }
}
