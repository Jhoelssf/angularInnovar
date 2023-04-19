import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent} from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    // children: [
    //   {
    //     path: 'ejemplo-child',
    //     component: EjemploChildComponent,
    //   },
    //   {
    //     path: 'ejemplo-child2',
    //     component: EjemploChild2Component,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonModuloRoutingModule {}
