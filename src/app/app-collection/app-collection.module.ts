import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { AppCollectionRoutingModule } from './app-collection-routing.module';



@NgModule({
  declarations: [
    PokemonPageComponent
  ],
  imports: [
    CommonModule,
    AppCollectionRoutingModule
  ]
})
export class AppCollectionModule { }
