import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hola2Component } from './hola2/hola2.component';

const routes: Routes = [{
  path: '',
  component: Hola2Component
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    Hola2Component
  ],
  exports: [RouterModule]
})
export class HolaRoutingModule { }
