import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReactiveService {
  
  private infoPokemon: Subject<RootObject> = new Subject<RootObject>();
  // infoPokemon: BehaviorSubject<RootObject | null> = new BehaviorSubject<RootObject | null>(null);


  constructor() {}
  
  async getPokemons(){
    return await fetch("https://pokeapi.co/api/v2/pokemon/", { method: 'GET'});
  }
  
  /*
  getPokemons(index: number){
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}`);
  }
 */
  async getPokemon (id: number){
    return await fetch("https://pokeapi.co/api/v2/pokemon/", { method: 'GET'});
  } 
  
  getInfoPokemon() {
    return this.infoPokemon.asObservable();
  }
  setInfoPokemon(obj: RootObject) {
    this.infoPokemon.next(obj);
  }
}
