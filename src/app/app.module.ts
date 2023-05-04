import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeAppComponent } from './components/poke-app/poke-app.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonService } from './services/pokemon.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {PokesearchComponent} from './components/pokesearch/pokesearch.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PokefavComponent } from './components/pokefav/pokefav.component';
import {PokeappFavComponent} from './components/pokeapp-fav/pokeapp-fav.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeAppComponent,
    PokeDetailComponent,
    FooterComponent,
    PokesearchComponent,
    PokefavComponent,
    PokeappFavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
