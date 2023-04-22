import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { RootObject } from '../model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokemonsService } from 'src/app/shared/pokemons.service';
import Swal from 'sweetalert2';

// import { PokeApiService } from 'src/app/shared/poke-api.service';

interface PokemonData {
  pokemonData: RootObject;
  favorite: boolean
}

@Component({
  selector: 'dialog-pokemon',
  templateUrl: 'dialog-pokemon.component.html',
  styleUrls: ['./dialog-pokemon.component.css'],
})

export class DialogPokemonComponent implements OnInit {
  infoPokemon!: RootObject;
  favorite: boolean =false;
  favoritesPokemon!: Array<RootObject>;

  constructor(
    public dialogRef: MatDialogRef<DialogPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PokemonData,
    public pokeAction: PokemonsService,
  ) {
    this.favorite = data.favorite
    this.infoPokemon = data.pokemonData;
  }

  addToFavorites(pokemon: RootObject): void {
    this.pokeAction.favoritePokemons$.subscribe((obj) => {
      this.favoritesPokemon = obj
    })
    this.pokeAction.addFavoritePokemon(pokemon)
    this.favorite = true
  }

  ngOnInit(): void {
  }

}
