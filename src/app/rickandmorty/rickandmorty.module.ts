import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { RickandmortyRoutingModule } from './rickandmorty-routing.module';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    CharactersComponent,
    CharacterListComponent
  ],
  imports: [
    MatGridListModule,
    MatCardModule,
    CommonModule,
    RickandmortyRoutingModule,
  ]
})
export class RickandmortyModule {}
