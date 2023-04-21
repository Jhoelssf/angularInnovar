import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppCollectionRoutingModule } from './app-collection-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogPokemonComponent } from './pokemon-page/dialog-pokemon/dialog-pokemon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FavouritePokemonComponent } from './pokemon-page/favourite-pokemon/favourite-pokemon.component';

@NgModule({
  declarations: [
    PokemonPageComponent,
    DialogPokemonComponent,
    FavouritePokemonComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppCollectionRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
  ],
})
export class AppCollectionModule {}
