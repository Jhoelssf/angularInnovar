import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonItem } from './model';
import { HttpClient } from '@angular/common/http';

interface PageInterface{
  count: number,
  next: string | null,
  previus: string | null,
  results: PokemonItem[]
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  baseUrl = 'https://pokeapi.co/api/v2';
  limit = 10;

  pokemonSelected!: Pokemon | undefined;
  pokemonList: PokemonItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onChangePage(0);
    this.onChangePokemon(1);
  }

  onChangePokemon(idPokemon: number | string){
    const url = `${this.baseUrl}/pokemon/${idPokemon}`;
    this.http.get<Pokemon>(url)
    .subscribe({
      next: (response) => {
        this.pokemonSelected = response;
        console.log(this.pokemonSelected);
      },
      error: (err) => {
        this.pokemonSelected = undefined;
      }
    });
  }
  
  onChangePage(offset: number){
    const url = `${this.baseUrl}/pokemon?limit=${this.limit}&offset=${offset}}`;

    this.http.get<PageInterface>(url)
    .subscribe((respose) => {
      this.pokemonList = respose.results;
      console.log(this.pokemonList);
    });
  }

}