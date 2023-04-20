import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeAlexandertModuleRoutingModule } from './poke-alexandert-module-routing.module';
import { PokeAlexandertComponent } from './poke-alexandert/poke-alexandert.component';
import { PokeHeaderComponent } from './poke-alexandert/poke-header/poke-header.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesComponent } from './poke-alexandert/favorites/favorites.component';
import PokeListComponent from './poke-alexandert/poke-list/poke-list.component';
import { PokeDialogComponent } from './poke-alexandert/poke-dialog/poke-dialog.component';

@NgModule({
  declarations: [
    PokeAlexandertComponent,
    PokeHeaderComponent,
    FavoritesComponent,
    PokeListComponent,
    PokeDialogComponent,
  ],
  imports: [
    CommonModule,
    PokeAlexandertModuleRoutingModule,
    HttpClientModule,
  ]
})
export class PokeAlexandertModuleModule { }
