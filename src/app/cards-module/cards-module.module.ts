import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsModuleRoutingModule } from './cards-module-routing.module';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CardsModuleRoutingModule,

  ]
})
export class CardsModuleModule { }
