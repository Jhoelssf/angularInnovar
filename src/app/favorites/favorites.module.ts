import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPokemonComponent } from './favorites-pokemon/favorites-pokemon.component';

import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FavoritesPokemonComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FavoritesModule { }
