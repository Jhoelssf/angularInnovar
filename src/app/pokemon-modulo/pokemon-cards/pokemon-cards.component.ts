import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveService } from 'src/app/shared/reactive.service';
import { RootObject } from './model';

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit {

  //Variables
  num_pokemon: number = 1281;
  array_pokemon: RootObject[] = [];
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient,
    private reactiveService: ReactiveService
  ) {}

  ngOnInit(): void {
    this.onUpdatePokemons();
  }

  onUpdatePokemons(): void {
    console.log("update esta funcionandos")
    this.array_pokemon = []

    for (let i = 0; i <= 20; i++) {

      this.http
        .get<RootObject>(`${this.baseUrl}${i}`)
        .subscribe((respuesta) => {
          this.array_pokemon.push(respuesta);
        });
  
    }
    console.log(this.array_pokemon)
  }

}
