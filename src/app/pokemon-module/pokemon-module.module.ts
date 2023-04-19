import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonChildComponent } from './pokemon/pokemon-child/pokemon-child.component';
import { PokemonChild2Component } from './pokemon/pokemon-child2/pokemon-child2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonModuleRoutingModule } from './pokemon-module-routing.module';



@NgModule({
  declarations: [
    PokemonComponent,
    PokemonChildComponent,
    PokemonChild2Component,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PokemonModuleRoutingModule,
  ]
})
export class PokemonModuleModule { }
