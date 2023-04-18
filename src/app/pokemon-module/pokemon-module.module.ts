import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonModuleRoutingModule } from './pokemon-module-routing.module';
import { PokemonsComponent } from './pokemons/pokemons.component';



@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PokemonModuleRoutingModule
  ]
})
export class PokemonModuleModule { }
