import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeViewComponent } from './poke-view/poke-view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: PokeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeProjectRoutingModule { }
