import { Component } from '@angular/core';
import { IPokemonData } from 'src/app/shared/models/resGetPokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { DialogPokemonComponent } from '../dialog-pokemon/dialog-pokemon.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-favourite-pokemon',
  templateUrl: './favourite-pokemon.component.html',
  styleUrls: ['./favourite-pokemon.component.css'],
})
export class FavouritePokemonComponent {
  favoriteList: IPokemonData[] = [];

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.pokemonService.getFavorites().subscribe((res) => {
      this.favoriteList = res;
    });
  }
  openDialogFavorite(pokemon: IPokemonData): void {
    const dialogRef = this.dialog.open(DialogPokemonComponent, {
      data: pokemon,
    });
  }

}
