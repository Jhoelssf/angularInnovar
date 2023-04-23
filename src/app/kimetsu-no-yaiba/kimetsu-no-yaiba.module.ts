import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './kimetsu-container/card/card.component';
import { KimetsuContainerComponent } from './kimetsu-container/kimetsu-container.component';
import { KimetsuNoYaibaRoutingModule } from './kimetsu-no-yaiba-routing.module';
import { NavbarComponent } from './kimetsu-container/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [KimetsuContainerComponent,CardComponent],
  imports: [
    CommonModule,
    KimetsuNoYaibaRoutingModule,
    HttpClientModule,
    MatIconModule

  
  ]
})
export class KimetsuNoYaibaModule { }
