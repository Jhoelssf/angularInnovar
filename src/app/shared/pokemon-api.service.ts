import { PokemonList } from './../models/pokemonList';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { PokemonObject } from '../models/pokemonObj';

@Injectable({
  providedIn: 'root'
})

export class PokemonAPIService {

  pokeAPIurl: string = "https://pokeapi.co/api/v2";
  constructor(
    private http:HttpClient
    
  ) {
  }

  getPokemonList(limit:number=20):Observable<PokemonList[]> {
    console.log(this.pokeAPIurl+'/pokemon?'+limit)
    return this.http.get<PokemonList[]>(this.pokeAPIurl+'/pokemon?limit='+limit).pipe(
      map((x:any)=>x.results)
    );
  }

  getPokemon(id: string | number):Observable<PokemonObject>{
    console.log('Buscando en: ',this.pokeAPIurl+'/pokemon/'+id)
    return this.http.get<PokemonObject>(this.pokeAPIurl+'/pokemon/'+id);
  }
}
