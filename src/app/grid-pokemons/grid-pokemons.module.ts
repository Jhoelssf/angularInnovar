import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridPokemonsRoutingModule } from './grid-pokemons-routing.module';
import { GridviewComponent } from './gridview/gridview.component';
import { GridcardComponent } from './gridcard/gridcard.component';
import { MaterialModule } from '../material.module';
import { DialogDataExampleDialog, InfoCardComponent } from './info-card/info-card.component';
import { DialogCardComponent } from './dialog-card/dialog-card.component';


@NgModule({
  declarations: [
    GridviewComponent,
    GridcardComponent,
    InfoCardComponent,
    DialogDataExampleDialog,
    DialogCardComponent
  ],
  imports: [
    CommonModule,
    GridPokemonsRoutingModule,
    MaterialModule,
  ]
})
export class GridPokemonsModule { }
