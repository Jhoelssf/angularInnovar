import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridPokemonsRoutingModule } from './grid-pokemons-routing.module';
import { GridviewComponent } from './gridview/gridview.component';
import { GridcardComponent } from './gridcard/gridcard.component';


@NgModule({
  declarations: [
    GridviewComponent,
    GridcardComponent
  ],
  imports: [
    CommonModule,
    GridPokemonsRoutingModule
  ]
})
export class GridPokemonsModule { }
