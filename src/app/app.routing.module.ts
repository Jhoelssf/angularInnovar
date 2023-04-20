import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards-module/cards/cards.component';

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
    path: 'cards',
    component: CardsComponent,
  },
  // {
  //   path: 'ejemplo',
  //   loadChildren: () =>
  //     import('./ejemplo-modulo/ejemplo-modulo.module').then(
  //       (mod) => mod.EjemploModuloModule
  //     ),
  // },
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
