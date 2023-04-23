import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './kimetsu-container/card/card.component';
import { KimetsuContainerComponent } from './kimetsu-container/kimetsu-container.component';
import { KimetsuNoYaibaRoutingModule } from './kimetsu-no-yaiba-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './kimetsu-container/card/dialog/dialog.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'
@NgModule({
  declarations: [KimetsuContainerComponent,CardComponent,DialogComponent],
  imports: [
    CommonModule,
    KimetsuNoYaibaRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule

  
  ]
})
export class KimetsuNoYaibaModule { }
