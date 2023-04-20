import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokeProjectRoutingModule } from './poke-project-routing.module';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokeHeaderComponent } from './poke-header/poke-header.component';

import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonFavViewComponent } from './pokemon-fav-view/pokemon-fav-view.component';
import { PokemonShortCardComponent } from './pokemon-short-card/pokemon-short-card.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';

@NgModule({
  declarations: [
    PokeViewComponent,
    PokeHeaderComponent,
    PokemonHomeComponent,
    PokemonFavViewComponent,
    PokemonShortCardComponent,
    PokemonDisplayComponent
  ],
  imports: [
    CommonModule,
    PokeProjectRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    HttpClientModule,
  ]
})
export class PokeProjectModule { }
