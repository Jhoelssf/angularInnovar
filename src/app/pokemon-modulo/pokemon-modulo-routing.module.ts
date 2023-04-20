import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardsComponent } from './pokemon-cards/pokemon-cards.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonCardsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonModuloRoutingModule { }
