import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './kimetsu-no-yaiba/kimetsu-container/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; // Importa el módulo de iconos
import { SoundtrackComponent } from './kimetsu-no-yaiba/kimetsu-container/soundtrack/soundtrack.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent,NavbarComponent,SoundtrackComponent],
  imports: [BrowserModule, AppRoutingModule,MatToolbarModule,MatIconModule,BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
