import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonModuloRoutingModule } from './pokemon-modulo-routing.module';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveExampleModule } from '../reactive-example/reactive-example.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    PokemonCardsComponent,
    PokemonCardsComponent
  ],
  imports: [
    CommonModule,
    PokemonModuloRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveExampleModule,
    MatCardModule,
  ]
})
export class PokemonModuloModule { }
