import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';

@Component({
  selector: 'app-dialog-pokemon-card',
  templateUrl: './dialog-pokemon-card.component.html',
  styleUrls: ['./dialog-pokemon-card.component.css']
})
export class DialogPokemonCardComponent implements OnInit {

  constructor(
    private pokeDialog: MatDialogRef<DialogPokemonCardComponent>,
    @Inject(MAT_DIALOG_DATA) public pokeDialogInfo: RootObject
  ) { }

  ngOnInit(): void {
  }

  onClose(){

  }

  addFavorite(){
    
  }
}
