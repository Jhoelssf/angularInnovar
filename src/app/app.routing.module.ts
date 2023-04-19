import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Hola2Component } from './hola/hola2/hola2.component';
import { CardsComponent } from './cards-module/cards/cards.component';

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
    path: 'hola',
    component: Hola2Component,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'ejemplo',
    loadChildren: () =>
      import('./ejemplo-modulo/ejemplo-modulo.module').then(
        (mod) => mod.EjemploModuloModule
      ),
  },
  // {
  //   path: '**',
  //   redirectTo: 'ejemplo',
  //   pathMatch: 'full',
  // },
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
