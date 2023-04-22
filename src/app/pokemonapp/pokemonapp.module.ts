import { NgModule } from '@angular/core';
import { PokemonRoutingModule } from './pokemon.routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './pokemon/home/home.component';
import { FavoritesComponent } from './pokemon/favorites/favorites.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DialogPokemonComponent } from './pokemon/home/dialog-pokemon/dialog-pokemon.component';
import { PipePokemonPipe } from './pokemon/home/pipes/pipe-pokemon.pipe';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PokemonComponent, HomeComponent, FavoritesComponent, DialogPokemonComponent, PipePokemonPipe],
  imports: [MatIconModule, MatButtonModule, MatDialogModule, MatCardModule, CommonModule, PokemonRoutingModule, HttpClientModule, FormsModule, MatFormFieldModule, MatInputModule],
})
export class PokemonModule {}
