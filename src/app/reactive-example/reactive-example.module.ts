import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveExampleRoutingModule } from './reactive-example-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [ReactiveComponent, PokemonesComponent,DialogComponent],
  imports: [CommonModule, ReactiveExampleRoutingModule,MatIconModule],
  exports: [ReactiveComponent,PokemonesComponent, DialogComponent],
})
export class ReactiveExampleModule {}
