import { Component, OnInit } from "@angular/core";
import { RootObject } from "../model";
import { HttpClient } from "@angular/common/http";

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { PokemonApiService } from "../../../shared/pokemon-api.service";

@Component({
  selector: "app-poke-list",
  templateUrl: "./poke-list.component.html",
  styleUrls: ["./poke-list.component.css"],
})
export class PokeListComponent implements OnInit {
  pokemon!: number;
  pokeArray: Array<RootObject> = [];
  constructor(
    private pokemonApiService: PokemonApiService,
  ) {}
  ngOnInit(): void {
    this.pokemonApiService.pokemon$.subscribe((obj) => {
      this.pokeArray.push(obj);
    });
    for (let i = 1; i < 11; i++) {
      this.pokemonApiService.getPokemon(i);      
    }
    console.log(this.pokeArray);
  }
}
