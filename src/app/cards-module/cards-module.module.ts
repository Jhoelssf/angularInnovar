import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModuleRoutingModule } from './cards-module-routing.module';
import { CardsComponent } from './cards/cards.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    CardsComponent,
    // CardComponent
  ],
  imports: [
    CommonModule,
    CardsModuleRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule



  ]
})
export class CardsModuleModule { }
