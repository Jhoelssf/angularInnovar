import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IPokemonData, IPokemonList, Pokemon } from '../model';
import { DialogPokemonComponent } from './dialog-pokemon/dialog-pokemon.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent {

  pokemonList!: Pokemon[] | undefined;
  objectPokemonList: IPokemonData[] | undefined = [];
  baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  async ngOnInit() {
    this.http.get<IPokemonList>(`${this.baseUrl}/pokemon?limit=20`).subscribe((response) => {
      this.pokemonList = response.results;
      for (let pokemon of response.results) {
        this.onImagePokemon(pokemon.name);
      }
      console.log(this.pokemonList);
    });
  }


  async onImagePokemon(idPokemon: number | string) {
    this.http.get<IPokemonData>(`${this.baseUrl}/pokemon/${idPokemon}`).subscribe({
      next: (response) => {
        this.objectPokemonList?.push(response)
        console.log(this.objectPokemonList);
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPokemonComponent, {
    });
  }
}
