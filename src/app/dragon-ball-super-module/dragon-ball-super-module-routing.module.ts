import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DragonBallSuperComponent } from './dragon-ball-super/dragon-ball-super.component';

const routes: Routes = [
  {
    path:"",
    component: DragonBallSuperComponent,
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonBallSuperModuleRoutingModule { }
