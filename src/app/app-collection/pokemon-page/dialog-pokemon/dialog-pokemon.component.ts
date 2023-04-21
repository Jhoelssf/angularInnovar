import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog , MatDialogRef} from '@angular/material/dialog';
import { IPokemonData } from 'src/app/shared/models/resGetPokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';


@Component({
  selector: 'app-dialog-pokemon',
  templateUrl: './dialog-pokemon.component.html',
  styleUrls: ['./dialog-pokemon.component.css']
})
export class DialogPokemonComponent {
  cardData: IPokemonData = {} as IPokemonData;

  constructor(
    public dialogRef: MatDialogRef<DialogPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPokemonData,
    private pokemonService: PokemonService
  ) {}

  ngOnInit () :void {
    this.cardData = this.data
  }

  addFavoritePokemon(pokemon: IPokemonData) {
    this.pokemonService.setNewFavorite(pokemon);
  }

}

