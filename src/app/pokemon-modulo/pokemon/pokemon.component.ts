import { Component } from '@angular/core';
import { RootObject } from './model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  objectPokemon!: RootObject | undefined;
  baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<RootObject>(`${this.baseUrl}/pokemon`).subscribe((response) => {
      this.objectPokemon = response;
      console.log(this.objectPokemon);
    });
  }

  onHabilityPokemon(idPokemon: number | string) {
    this.http.get<RootObject>(`${this.baseUrl}/ability ${idPokemon}`).subscribe({
      next: (response) => {
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      }
    });
  }

}
