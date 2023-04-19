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
  @Input() favorites!: Character[];
  @Output() addFavorite: EventEmitter<Character> = new EventEmitter<Character>();
  @Output() removeFavorite: EventEmitter<string | number> = new EventEmitter<string | number>();
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
  removeCharacter(id: string | number) {
    this.removeFavorite.emit(id)
  }

  openDialog(character: Character): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      data: {character: character, favorites: this.favorites},
    });
    dialogRef.afterClosed().subscribe((result)=>{
      console.log('The dialog was closed');
      if(result){
        const character: Character = this.characters.filter(char => `${char.id}` === `${result}`)[0];
        if(this.favorites.find(fav => `${fav.id}` === `${result}`)){
          this.removeCharacter(parseInt(result));
        }else{
          this.addCharacter(character);
        }
      }
    })
  }
}
