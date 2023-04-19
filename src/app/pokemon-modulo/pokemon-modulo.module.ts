import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonModuloRoutingModule } from './pokemon-modulo-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonHabilitiesComponent } from './pokemon/pokemon-habilities/pokemon-habilities.component';
import { PokemonLocationComponent } from './pokemon/pokemon-location/pokemon-location.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonHabilitiesComponent,
    PokemonLocationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    PokemonModuloRoutingModule,
  ],
})
export class PokemonModuloModule {}
