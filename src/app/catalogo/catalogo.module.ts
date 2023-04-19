import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { BarfilterComponent } from './barfilter/barfilter.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { PageviewComponent } from './pageview/pageview.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BarfilterComponent,
    CatalogoComponent,
    PageviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
