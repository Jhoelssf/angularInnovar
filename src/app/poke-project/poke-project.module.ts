import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeProjectRoutingModule } from './poke-project-routing.module';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokeHeaderComponent } from './poke-header/poke-header.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    PokeViewComponent,
    PokeHeaderComponent
  ],
  imports: [
    CommonModule,
    PokeProjectRoutingModule,
    MatToolbarModule,
  ]
})
export class PokeProjectModule { }
