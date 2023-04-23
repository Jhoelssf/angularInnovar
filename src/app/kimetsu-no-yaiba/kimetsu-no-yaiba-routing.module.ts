import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KimetsuContainerComponent } from './kimetsu-container/kimetsu-container.component';

const routes: Routes = [
  {
    path:'',
    component:KimetsuContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KimetsuNoYaibaRoutingModule { }
