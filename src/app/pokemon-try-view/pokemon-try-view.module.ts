import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PokemonTryViewRoutingModule } from './pokemon-try-view-routing.module';
import { PokemonTryPageComponent } from './pokemon-try-page/pokemon-try-page.component';

import { PokemonBasicInfoComponent } from './pokemon-basic-info/pokemon-basic-info.component';
import { PokemonGeneralInfoComponent } from './pokemon-general-info/pokemon-general-info.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrayTryComponent } from './form-array-try/form-array-try.component';
import { ViewPokemonNumberNComponent } from './view-pokemon-number-n/view-pokemon-number-n.component';


@NgModule({
  declarations: [
    PokemonTryPageComponent,
    PokemonBasicInfoComponent,
    PokemonGeneralInfoComponent,
    FormArrayTryComponent,
    ViewPokemonNumberNComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PokemonTryViewRoutingModule
  ]
})
export class PokemonViewModule { }
