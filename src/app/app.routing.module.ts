import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
    loadChildren: () =>
      import('./cards-module/cards-module.module').then(
        (mod) => mod.CardsModuleModule
      ),
  },
  // },
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
