import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsModuleRoutingModule } from './cards-module-routing.module';
import { CardsComponent } from './cards/cards.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogeCardComponent } from './cards/dialoge-card/dialoge-card.component';
import { FavoritesComponent } from './cards/favorites/favorites.component';


@NgModule({
  declarations: [
    CardsComponent,
    DialogeCardComponent,
    FavoritesComponent,
    // CardComponent
  ],
  imports: [
    CommonModule,
    CardsModuleRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
  ],
})
export class CardsModuleModule {}
