import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { PokemonComponent } from './pokemon-modulo/pokemon/pokemon.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 9e257c8743e930840accf98ff38fed534c5c9748

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
