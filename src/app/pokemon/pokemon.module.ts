import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonlistComponent } from './pokemonlist/pokemonlist.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

import { BrowserModule } from '@angular/platform-browser';
import { FiltroPipe } from './pipes/filtro.pipe';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    PokemonlistComponent,
    FiltroPipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    CommonModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    PokemonlistComponent
  ]
})
export class PokemonModule { }
