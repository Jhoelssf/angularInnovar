import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './kimetsu-container/card/card.component';
import { KimetsuContainerComponent } from './kimetsu-container/kimetsu-container.component';
import { KimetsuNoYaibaRoutingModule } from './kimetsu-no-yaiba-routing.module';
import { NavbarComponent } from './kimetsu-container/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './kimetsu-container/card/dialog/dialog.component';
@NgModule({
  declarations: [KimetsuContainerComponent,CardComponent,DialogComponent],
  imports: [
    CommonModule,
    KimetsuNoYaibaRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,

  
  ]
})
export class KimetsuNoYaibaModule { }
