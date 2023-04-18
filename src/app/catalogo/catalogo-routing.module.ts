import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageviewComponent } from './pageview/pageview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: '',
        component: PageviewComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
