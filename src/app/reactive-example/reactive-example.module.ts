import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveExampleRoutingModule } from './reactive-example-routing.module';
import { ReactiveComponent } from './reactive/reactive.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [ReactiveComponent, PokemonesComponent,DialogComponent, FavoriteComponent],
  imports: [CommonModule, ReactiveExampleRoutingModule,MatIconModule,MatDialogModule],
  exports: [ReactiveComponent,PokemonesComponent, DialogComponent, FavoriteComponent],
})
export class ReactiveExampleModule {}
