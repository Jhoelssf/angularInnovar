import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { FormArrayTryComponent } from './form-array-try/form-array-try.component';
const routes: Routes = [
  {path: '', component: PokemonPageComponent},
  {path:'formArray', component: FormArrayTryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonViewRoutingModule { }
