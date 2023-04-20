import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { EjemploChildComponent } from './ejemplo/ejemplo-child/ejemplo-child.component';
import { EjemploChild2Component } from './ejemplo/ejemplo-child2/ejemplo-child2.component';

const routes: Routes = [
  {
    path: '',
    component: EjemploComponent,
    children: [
      {
        path: 'ejemplo-child',
        component: EjemploChildComponent,
      },
      {
        path: 'ejemplo-child2',
        component: EjemploChild2Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploModuloRoutingModule {}
