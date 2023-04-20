import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoCardComponent } from './grid-pokemons/info-card/info-card.component';
import { FavoritesPokemonComponent } from './favorites/favorites-pokemon/favorites-pokemon.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'favoritos',
    loadChildren: () => 
      import('./favorites/favorites.module').then(
        (m) => m.FavoritesModule
      )
  },
  {
    path: 'catalogo',
    loadChildren: () => 
      import('./grid-pokemons/grid-pokemons.module').then(
        (m) => m.GridPokemonsModule
      )
  },
  {
    path: 'ejemplo',
    loadChildren: () =>
      import('./ejemplo-modulo/ejemplo-modulo.module').then(
        (mod) => mod.EjemploModuloModule
      ),
  },
  {
    path: 'dialogo',
    component: InfoCardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
