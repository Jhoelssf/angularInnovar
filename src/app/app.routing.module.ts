import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:"home",
    pathMatch: 'full',
  },
  {
    path:'home',
    loadChildren:()=>import('./dragon-ball-super-module/dragon-ball-super-module.module').then((mod)=>mod.DragonBallSuperModuleModule)
  }

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
