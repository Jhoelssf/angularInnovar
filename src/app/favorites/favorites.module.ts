import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPokemonComponent } from './favorites-pokemon/favorites-pokemon.component';


@NgModule({
  declarations: [
    FavoritesPokemonComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
