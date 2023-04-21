import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogPokemonComponent } from './dialog-pokemon/dialog-pokemon.component';
import { IResGetPokemons } from 'src/app/shared/models/resGetPokemons.model';
import { IPokemonData } from 'src/app/shared/models/resGetPokemon.model';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
})
export class PokemonPageComponent {
  listPokemon: IPokemonData[] = [];

  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.http
      .get<IResGetPokemons>(`${this.baseUrl}/pokemon`)
      .subscribe((response) => {
        response.results.forEach((simplePokemon) => {
          this.http
            .get<IPokemonData>(simplePokemon.url)
            .subscribe((completePokemon) => {
              this.listPokemon.push(completePokemon);
            });
        });
      });
  }

  openDialog(pokemon: IPokemonData): void {
    const dialogRef = this.dialog.open(DialogPokemonComponent, {
      data: pokemon,
    });
  }


}
