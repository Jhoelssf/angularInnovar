import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeAppComponent } from './components/poke-app/poke-app.component';
import { PokefavComponent } from './components/pokefav/pokefav.component';
import {PokesearchComponent} from './components/pokesearch/pokesearch.component';
import {PokeappFavComponent} from './components/pokeapp-fav/pokeapp-fav.component';

const routes: Routes = [
  {path: 'home', component: PokeAppComponent},
  {path: 'home/:id', component: PokeDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
  { path: 'favorite', component: PokeappFavComponent},
  { path: '', component:PokeAppComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
