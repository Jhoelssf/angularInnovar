import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() addFavorite: EventEmitter<Character> = new EventEmitter<Character>();
  hoveredId: number | null = null; 

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleHover(id: number | null){
    this.hoveredId = id
  }

  addCharacter(character: Character) {
    this.addFavorite.emit(character)
  }

  openDialog(character: Character): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      data: {character: character},
    });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log('The dialog was closed');
      if(result){
        const character: Character = this.characters.filter(x => `${x.id}` === `${result}`)[0];
        this.addCharacter(character);
      }
    })
  }
}
