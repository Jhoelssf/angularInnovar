import { RouterModule, Routes } from "@angular/router";
import { CharactersComponent } from "./characters/characters.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class RickandmortyRoutingModule {}