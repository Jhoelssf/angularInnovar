import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonChildComponent } from './pokemon/pokemon-child/pokemon-child.component';
import { PokemonChild2Component } from './pokemon/pokemon-child2/pokemon-child2.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    // children: [
    //    {
    //      path: 'Pokemon-child',
    //      component: PokemonChildComponent,
    //    },
    //    {
    //      path: 'Pokemon-child2',
    //      component: PokemonChild2Component,
    //    },
    //   ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonModuleRoutingModule {}