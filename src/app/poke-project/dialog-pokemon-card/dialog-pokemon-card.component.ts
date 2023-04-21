import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonFavoritesManagementService } from 'src/app/shared/pokemon-favorites-management.service';

@Component({
  selector: 'app-dialog-pokemon-card',
  templateUrl: './dialog-pokemon-card.component.html',
  styleUrls: ['./dialog-pokemon-card.component.css'],
})
export class DialogPokemonCardComponent implements OnInit {
  pokeDialogInfo!: RootObject;
  arrPokemonTypeDir: string[] = [];
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
  }

  onClose() {}

  makeFavoriteAction() {
    if (this.pokeFavoritesService.comprobeIfItsFavorite(this.pokeDialogInfo)) {
      this.deleFavorite();
    } else {
      this.addFavorite();
    }
  }
  private addFavorite() {
    this.pokeFavoritesService.addPokemonToFav(this.pokeDialogInfo);
  }

  private deleFavorite() {
    this.pokeFavoritesService.deletePokemonToFav(this.pokeDialogInfo);
  }
}
