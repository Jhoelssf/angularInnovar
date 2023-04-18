import { VisualizerComponent } from './ejemplo/visualizer/visualizer.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'pokedex', component:EjemploComponent },
      {path:'card', component:VisualizerComponent},
      {path:'**', redirectTo: 'pokedex'}
    ]
  }
  // {
  //   path: '',
  //   component: EjemploComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploModuloRoutingModule {}
