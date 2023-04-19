import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { RickandmortyRoutingModule } from './rickandmorty-routing.module';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { CharacterDialogComponent } from './characters/character-dialog/character-dialog.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterListComponent,
    CharacterDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    CommonModule,
    RickandmortyRoutingModule,
  ]
})
export class RickandmortyModule {}
