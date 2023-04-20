import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
    path: 'pokeAlexandert',
    loadChildren: () => 
    import('./poke-alexandert-module/poke-alexandert-module.module').then(
      (mod) => mod.PokeAlexandertModuleModule
    )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    // enableTracing: true, // <-- debugging purposes only
    useHash: false
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
