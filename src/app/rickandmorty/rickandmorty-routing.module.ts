import { RouterModule, Routes } from "@angular/router";
import { CharactersComponent } from "./characters/characters.component";
import { NgModule } from "@angular/core";
import { FavoritesComponent } from "./favorites/favorites.component";

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class RickandmortyRoutingModule {}