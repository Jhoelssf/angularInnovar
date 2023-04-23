import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCollectionRoutingModule } from './app-collection-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogPokemonComponent } from './pokemon-page/dialog-pokemon/dialog-pokemon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FavouritePokemonComponent } from './pokemon-page/favourite-pokemon/favourite-pokemon.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchedPokemonComponent } from './pokemon-page/searched-pokemon/searched-pokemon.component';
@NgModule({
  declarations: [
    PokemonPageComponent,
    DialogPokemonComponent,
    FavouritePokemonComponent,
    SearchedPokemonComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppCollectionRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatAutocompleteModule,
    MatAutocompleteModule,MatFormFieldModule,FormsModule, ReactiveFormsModule
  ],
})
export class AppCollectionModule {}