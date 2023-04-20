import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { PokeApiService } from '../../../shared/poke-api.service';
import { RootObject } from './model';

interface PokemonData {
  pokemonData: RootObject;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemon!: number;
  arrayPokemon: Array<RootObject> = [];
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private pokeApi: PokeApiService
  ) {}
  openDialog(Pokemon: RootObject): void {
    console.log(Pokemon);
    // this.pokeApi.currentPokemon$.next(idPokemon)
    // this.pokemon = this.arrayPokemon.findIndex((element) => element.id == idPokemon)
    this.dialog.open(DialogPokemon, {
      width: '40rem',
      height: '33rem',
      data: {
        pokemonData: Pokemon,
        // namePokemon: this.arrayPokemon[this.pokemon].name,
        // abilitiesPokemon: this.arrayPokemon[this.pokemon].abilities,
        // heightPokemon: this.arrayPokemon[this.pokemon].height,
        // images: this.arrayPokemon[this.pokemon].sprites,
        // weightPokemon: this.arrayPokemon[this.pokemon].weight
      },
    });
  }

  ngOnInit() {
    this.pokeApi.pokemon$.subscribe((obj) => {
      this.arrayPokemon.push(obj);
    });
    for (let i = 1; i < 20; i++) {
      this.pokeApi.getPokemon(i);
    }
    console.log(this.arrayPokemon);
  }
}

@Component({
  selector: 'dialog-pokemon',
  templateUrl: 'dialog-pokemon.html',
  styleUrls: ['./home.component.css'],
})
export class DialogPokemon implements OnInit {
  infoPokemon!: RootObject;
  constructor(
    public dialogRef: MatDialogRef<DialogPokemon>,
    private pokeApiService: PokeApiService,
    @Inject(MAT_DIALOG_DATA) public data: PokemonData
  ) {
    this.infoPokemon = data.pokemonData;
  }
  ngOnInit(): void {
    // subscribe
    // this.pokeApiService.getPokemon(data.name)
  }
}
