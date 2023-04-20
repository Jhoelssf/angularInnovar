import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RootObject } from '../ejemplo-modulo/ejemplo/model';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  pokemon$: Subject<RootObject> = new Subject<RootObject>();
  // pokemon$: BehaviorSubject<RootObject | undefined> = new BehaviorSubject<RootObject | undefined>(undefined);
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(idPokemon: number | string) {
    this.http
      .get<RootObject>(`${this.baseUrl}${idPokemon}`)
      .subscribe((res) => {
        this.pokemon$.next(res);
      });
  }
  getPokemonObs(idPokemon: number | string) {
    this.http.get<RootObject>(`${this.baseUrl}${idPokemon}`);
  }
}
