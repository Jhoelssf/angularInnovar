import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonObject } from 'src/app/models/pokemonObj';
import { FavoritesServiceService } from 'src/app/shared/favorites-service.service';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css'],
})
export class DialogCardComponent implements OnInit {

  constructor(
    public favService: FavoritesServiceService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: PokemonObject
  ) { }

  ngOnInit(): void {
  }

  addToFav():void{
    console.log('Dialog agregando boton')
    this.favService.agregarCarta(this.data);
    this.dialog.closeAll();
    // this.favServ.agregarCartaFavorita(this.data);
  }

  onClickClose():void{
    this.dialog.closeAll();
  }

}
