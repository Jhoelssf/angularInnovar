import { Component, Inject, OnInit } from '@angular/core';
import { RootObject } from '../model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokemonsService } from 'src/app/shared/pokemons.service';
// import { PokeApiService } from 'src/app/shared/poke-api.service';

interface PokemonData {
  pokemonData: RootObject;
}

@Component({
  selector: 'dialog-pokemon',
  templateUrl: 'dialog-pokemon.component.html',
  styleUrls: ['./dialog-pokemon.component.css'],
})

export class DialogPokemonComponent implements OnInit {
  infoPokemon!: RootObject;
  favoritesPokemon!: Array<RootObject>;

  constructor(
    public dialogRef: MatDialogRef<DialogPokemonComponent>,
    // private pokeApiService: PokeApiService,
    @Inject(MAT_DIALOG_DATA) public data: PokemonData,
    private pokeAction: PokemonsService
  ) {
    this.infoPokemon = data.pokemonData;
  }

  addToFavorites(pokemon: RootObject):void {
    this.pokeAction.favoritePokemons$.subscribe((obj) => {
      this.favoritesPokemon = obj
      console.log(this.favoritesPokemon)
    })
    this.pokeAction.addFavoritePokemon(pokemon)
  }

  ngOnInit(): void {
    // subscribe
    // this.pokeApiService.getPokemon(data.name)
  }
}
