import { Component , Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog , MatDialogRef} from '@angular/material/dialog';
import { IPokemonData } from 'src/app/shared/models/resGetPokemon.model';


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
  ) {}

  ngOnInit () :void {
    this.cardData = this.data
  }

  addFavoritePokemon(pokemon: IPokemonData) {

  }

}

