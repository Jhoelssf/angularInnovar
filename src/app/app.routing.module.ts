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
    loadChildren:()=>import('./kimetsu-no-yaiba/kimetsu-no-yaiba.module').then((mod)=>mod.KimetsuNoYaibaModule)
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
