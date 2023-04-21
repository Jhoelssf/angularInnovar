import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { DialogCardComponent } from './dialog-card/dialog-card.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NavigateBarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, 
    MatToolbarModule, MatButtonModule,MatCardModule,
  MatDialogModule],
  entryComponents: [DialogCardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
