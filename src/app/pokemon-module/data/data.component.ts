import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IPokemon } from './models';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  objectPokemon!: IPokemon | undefined;
  idPokemon = 1;

  ngOnInit(): void {
    this.http
      .get<IPokemon>(`${this.baseUrl}/${this.idPokemon}`)
      .subscribe((response) => {
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      });
  }

  onChangePokemon(pokemonId: number) {
    this.http
      .get<IPokemon>(`${this.baseUrl}/${pokemonId}`)
      .subscribe((response) => {
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      });
  }
}
