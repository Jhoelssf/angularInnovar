import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';
import { PokemonFavoritesManagementService } from 'src/app/shared/pokemon-favorites-management.service';

@Component({
  selector: 'app-dialog-pokemon-card',
  templateUrl: './dialog-pokemon-card.component.html',
  styleUrls: ['./dialog-pokemon-card.component.css']
})
export class DialogPokemonCardComponent implements OnInit {
  pokeDialogInfo! : RootObject;
  constructor(
    private pokeDialog: MatDialogRef<DialogPokemonCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RootObject,
    private pokeFavoritesService : PokemonFavoritesManagementService,
  ) { }

  ngOnInit(): void {
    this.pokeDialogInfo = this.data;
  }

  onClose(){
  }

  addFavorite(){
    this.pokeFavoritesService.addPokemonToFav(this.pokeDialogInfo);
  }
}
