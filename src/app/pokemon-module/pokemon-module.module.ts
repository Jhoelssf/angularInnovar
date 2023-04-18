import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokemonModuleRoutingModule } from './pokemon-module-routing.module';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    PokemonModuleRoutingModule
  ]
})
export class PokemonModuleModule { }
