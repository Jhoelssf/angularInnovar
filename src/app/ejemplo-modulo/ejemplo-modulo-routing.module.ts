import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
// import { DialogComponent } from './ejemplo/dialog/dialog.component';

const routes: Routes = [
  {
    path: '',
    component: EjemploComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploModuloRoutingModule {}
