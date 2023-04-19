import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatChipsModule,
    MatListModule
  ]
})
export class MaterialModule { }
