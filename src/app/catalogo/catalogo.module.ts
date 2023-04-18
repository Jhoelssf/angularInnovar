import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { BarfilterComponent } from './barfilter/barfilter.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PageviewComponent } from './pageview/pageview.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BarfilterComponent,
    CatalogoComponent,
    PageviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
