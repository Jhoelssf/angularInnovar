import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  /*
  {
    path: '',
    redirectTo: 'ejemplo',
    pathMatch: 'full',
  },
  */
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },

  {
    path: 'ejemplo',
    loadChildren: () =>
      import('./ejemplo-modulo/ejemplo-modulo.module').then(
        (mod) => mod.EjemploModuloModule
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
