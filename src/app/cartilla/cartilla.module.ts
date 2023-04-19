import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartillaRoutingModule } from './cartilla-routing.module';
import { PageviewComponent } from './pageview/pageview.component';


@NgModule({
  declarations: [
    PageviewComponent
  ],
  imports: [
    CommonModule,
    CartillaRoutingModule
  ]
})
export class CartillaModule { }
