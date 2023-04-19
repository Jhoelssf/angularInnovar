import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolaRoutingModule } from './hola-routing.module';
import { Hola2Component } from './hola2/hola2.component';
import { Hola3Component } from './hola3/hola3.component';


@NgModule({
  declarations: [
    Hola2Component,
    Hola3Component
  ],
  imports: [
    CommonModule,
    HolaRoutingModule
  ]
})
export class HolaModule { }
