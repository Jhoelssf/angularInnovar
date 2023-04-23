import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService as AuthGuard } from './shared/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rickandmorty',
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
    path: 'rickandmorty',
    loadChildren: () =>
      import('./rickandmorty/rickandmorty.module')
      .then((mod) => mod.RickandmortyModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => 
      import('./auth/auth.module')
      .then((mod) => mod.AuthModule)
  },
  { path: '**', redirectTo: '' }
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
