import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../../charactermodels';

export interface DialogData {
  character: Character;
  favorites: Character[];
}

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.css']
})
export class CharacterDialogComponent implements OnInit {
  favorite: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
    this.favorite = this.data.favorites.filter(x=>x.id === this.data.character.id).length > 0;
    
    console.log(this.data.favorites.filter(x=>x.id === this.data.character.id).length, this.favorite)
  }

}
