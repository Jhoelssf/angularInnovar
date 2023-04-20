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
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { DialogPokemonCardComponent } from './dialog-pokemon-card/dialog-pokemon-card.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    PokeViewComponent,
    PokeHeaderComponent,
    PokemonHomeComponent,
    PokemonFavViewComponent,
    PokemonShortCardComponent,
    PokemonDisplayComponent,
    DialogPokemonCardComponent,
  ],
  entryComponents: [
    DialogPokemonCardComponent,
  ],
  imports: [
    CommonModule,
    PokeProjectRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatButtonModule,
    HttpClientModule,
  ]
})
export class PokeProjectModule { }
