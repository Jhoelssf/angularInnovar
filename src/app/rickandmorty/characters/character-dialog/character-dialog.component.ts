import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../../charactermodels';

export interface DialogData {
  character: Character;
}

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.css']
})
export class CharacterDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

}
