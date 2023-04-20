import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { DialogCardComponent } from './grid-pokemons/dialog-card/dialog-card.component';
import { FavoritesPokemonComponent } from './favorites/favorites-pokemon/favorites-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    HttpClientModule,
    MaterialModule,
  ],
  entryComponents: [
    DialogCardComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
