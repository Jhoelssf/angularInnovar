import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../charactermodels';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDialogComponent } from '../character-dialog/character-dialog.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() characters!: Character[];
  hoveredId: number | null = null; 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleHover(id: number | null){
    this.hoveredId = id
  }

  openDialog(character: Character): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      data: {character: character},
    });
    dialogRef.afterClosed().subscribe(()=>{
      console.log('The dialog was closed')
    })
  }
}
