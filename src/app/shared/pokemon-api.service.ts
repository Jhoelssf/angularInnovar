import { Injectable } from "@angular/core";
import { RootObject } from "../ejemplo-modulo/ejemplo/model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PokemonApiService {
  pokemon$: Subject<RootObject> = new Subject<RootObject>();
  baseUrl = "https://pokeapi.co/api/v2/pokemon/";

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
