import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTryPageComponent } from './pokemon-try-page/pokemon-try-page.component'
import { FormArrayTryComponent } from './form-array-try/form-array-try.component';
const routes: Routes = [
  {path: '', component: PokemonTryPageComponent},
  {path:'formArray', component: FormArrayTryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonTryViewRoutingModule { }
