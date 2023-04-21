import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppCollectionModule } from './app-collection/app-collection.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ejemplo',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ejemplo',
    loadChildren: () =>
      import('./ejemplo-modulo/ejemplo-modulo.module').then(
        (mod) => mod.EjemploModuloModule
      ),
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokemon-modulo/pokemon-modulo.module').then(
        (mod) => mod.PokemonModuloModule
      ),
  },
  {
    path: 'collection-pokemon',
    loadChildren: () =>
      import('./app-collection/app-collection.module').then(
        (mod) => mod.AppCollectionModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true, // <-- debugging purposes only
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
