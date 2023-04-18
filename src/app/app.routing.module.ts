import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
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
    path: 'catalogo',
    loadChildren: () =>
      import('./catalogo/catalogo.module').then(
        (mod) => mod.CatalogoModule
      ),
  },
  {
    path: '**',
    redirectTo:'ejemplo'  
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true, // <-- debugging purposes only
      useHash: false,
      relativeLinkResolution: 'legacy',
      enableTracing:true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
