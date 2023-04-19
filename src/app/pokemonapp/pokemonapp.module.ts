import { NgModule } from '@angular/core';
import { PokemonRoutingModule } from './pokemon.routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './pokemon/home/home.component';
import { FavoritesComponent } from './pokemon/favorites/favorites.component';


@NgModule({
  declarations: [PokemonComponent, HomeComponent, FavoritesComponent],
  imports: [ CommonModule, PokemonRoutingModule, HttpClientModule],
})
export class PokemonModule {}
