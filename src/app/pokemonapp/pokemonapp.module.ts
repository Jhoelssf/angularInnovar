import { NgModule } from '@angular/core';
import { PokemonRoutingModule } from './pokemon.routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DialogPokemon, HomeComponent } from './pokemon/home/home.component';
import { FavoritesComponent } from './pokemon/favorites/favorites.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [PokemonComponent, HomeComponent, FavoritesComponent, DialogPokemon],
  imports: [MatIconModule, MatButtonModule, MatDialogModule, MatCardModule, CommonModule, PokemonRoutingModule, HttpClientModule],
})
export class PokemonModule {}
