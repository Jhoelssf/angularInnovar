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
import { MatPaginatorModule } from '@angular/material/paginator';
import { FavoritesComponent } from './favorites/favorites.component';
import { CardComponent } from './characters/character-list/card/card.component';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterListComponent,
    CharacterDialogComponent,
    FavoritesComponent,
    CardComponent,
  ],
  imports: [
    MatPaginatorModule,
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