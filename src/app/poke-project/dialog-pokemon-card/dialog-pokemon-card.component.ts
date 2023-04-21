import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonFavoritesManagementService } from 'src/app/shared/pokemon-favorites-management.service';

interface TypesUrls {
  [key: string]: string;
}
@Component({
  selector: 'app-dialog-pokemon-card',
  templateUrl: './dialog-pokemon-card.component.html',
  styleUrls: ['./dialog-pokemon-card.component.css'],
})
export class DialogPokemonCardComponent implements OnInit {
  pokeDialogInfo!: RootObject;
  arrPokemonTypeDir: string[] = [];
  itsAFavPokemon!: boolean;
  typesUrls: TypesUrls = {
    bug: 'https://i.imgur.com/ClrJZgc.png',
    dark: 'https://i.imgur.com/TqgcQJg.png',
    dragon: 'https://i.imgur.com/LKeKTCh.png',
    electric: 'https://i.imgur.com/UZXR4XS.png',
    fairy: 'https://i.imgur.com/N5yKiKW.png',
    fighting: 'https://i.imgur.com/uljHP2a.png',
    fire: 'https://i.imgur.com/YLFmobl.png',
    flying: 'https://i.imgur.com/GLgtFu8.png',
    ghost: 'https://i.imgur.com/YAKEmD1.png',
    grass: 'https://i.imgur.com/MI3qN5G.png',
    ground: 'https://i.imgur.com/P7oUqJA.png',
    ice: 'https://i.imgur.com/CQbB4aM.png',
    normal: 'https://i.imgur.com/5StGScN.png',
    poison: 'https://i.imgur.com/cC4l31Q.png',
    psychic: 'https://i.imgur.com/MfAJenN.png',
    rock: 'https://i.imgur.com/8YK4ShS.png',
    steel: 'https://i.imgur.com/9AF59D9.png',
    water: 'https://i.imgur.com/yYwSP4i.png',
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RootObject,
    private pokeFavoritesService: PokemonFavoritesManagementService
  ) {}

  ngOnInit(): void {
    this.pokeDialogInfo = this.data;

    this.pokeDialogInfo.types.forEach((pokeType) => {
      console.log();
      this.arrPokemonTypeDir.push(
        `../../shared/pokemonTypeSprite/${pokeType.type.name}.png`
      );
    });

    this.itsAFavPokemon = this.pokeFavoritesService.comprobeIfItsFavorite(
      this.pokeDialogInfo
    );
  }

  onClose() {}

  makeFavoriteAction() {
    if (this.itsAFavPokemon) {
      this.deleFavorite();
    } else {
      this.addFavorite();
    }
    this.itsAFavPokemon = !this.itsAFavPokemon;
  }
  private addFavorite() {
    this.pokeFavoritesService.addPokemonToFav(this.pokeDialogInfo);
  }

  private deleFavorite() {
    this.pokeFavoritesService.deletePokemonToFav(this.pokeDialogInfo);
  }
}
