import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { FavouritePokemonComponent } from './pokemon-page/favourite-pokemon/favourite-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonPageComponent,
  },
  {
    path: 'favorites',
    component: FavouritePokemonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppCollectionRoutingModule {}
