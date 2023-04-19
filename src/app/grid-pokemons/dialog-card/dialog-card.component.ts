import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonObject } from 'src/app/models/pokemonObj';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: PokemonObject
  ) { }

  ngOnInit(): void {
  }

  addToFav():void{
    console.log('Agregado a favoritos!')
  }

  onClickClose():void{
    this.dialog.closeAll();
  }

}
