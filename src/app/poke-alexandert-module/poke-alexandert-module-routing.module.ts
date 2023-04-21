import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokeAlexandertComponent } from "./poke-alexandert/poke-alexandert.component";
import { PokeListComponent } from "./poke-alexandert/poke-list/poke-list.component";
import { FavoritesComponent } from "./poke-alexandert/favorites/favorites.component";

const routes: Routes = [
  {
    path: "",
    component: PokeAlexandertComponent,
    children: [
      {
        path:"",
        redirectTo: "poke-list",
        pathMatch: 'full',
      },
      {
        path: "poke-list",
        component: PokeListComponent,
      },
      {
        path: "favorites",
        component: FavoritesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeAlexandertModuleRoutingModule {}
