import { Component, Inject, OnInit } from '@angular/core';
import { RootObject, Sprites } from './model';
import { HttpClient } from "@angular/common/http"
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ability } from './model';

interface PokemonData {
  pokemonData: RootObject
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  pokemon!: number;
  arrayPokemon: Array<RootObject> = [];
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient, private dialog: MatDialog) {

  }
  openDialog(Pokemon: RootObject): void {
    console.log(Pokemon)
    // this.pokemon = this.arrayPokemon.findIndex((element) => element.id == idPokemon)
    this.dialog.open(DialogPokemon, {
      width: '40rem',
      height: '35rem',
      data: {
        pokemonData : Pokemon 
        // namePokemon: this.arrayPokemon[this.pokemon].name,
        // abilitiesPokemon: this.arrayPokemon[this.pokemon].abilities,
        // heightPokemon: this.arrayPokemon[this.pokemon].height,
        // images: this.arrayPokemon[this.pokemon].sprites,
        // weightPokemon: this.arrayPokemon[this.pokemon].weight
      }
    });
  }

  ngOnInit() {
    for (let i = 1; i < 20; i++) {
      this.http.get<RootObject>(`https://pokeapi.co/api/v2/pokemon/${i}`).subscribe((res) => {
        this.arrayPokemon.push(res)
      })
    }
    console.log(this.arrayPokemon)
  }
}

@Component({
  selector: 'dialog-pokemon',
  templateUrl: 'dialog-pokemon.html',
  styleUrls: ['./home.component.css']
})
export class DialogPokemon {
  constructor(public dialogRef: MatDialogRef<DialogPokemon>, @Inject(MAT_DIALOG_DATA) public data: PokemonData) { }

}
