import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeViewComponent } from './poke-view/poke-view.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonFavViewComponent } from './pokemon-fav-view/pokemon-fav-view.component';

const routes: Routes = [
  {
    path:'',
    component: PokeViewComponent,
    children: [
      {
        path: 'home',
        component: PokemonHomeComponent,
      },
      {
        path: 'favorites',
        component: PokemonFavViewComponent
      },
      {
        path: '',
        component: PokemonHomeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeProjectRoutingModule { }