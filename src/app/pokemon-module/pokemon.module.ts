import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { DataComponent } from './data/data.component';
import { TitleComponent } from './data/title/title.component';
import { SkillsComponent } from './data/skills/skills.component';

@NgModule({
  declarations: [DataComponent, TitleComponent, SkillsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    PokemonRoutingModule,
  ],
})
export class PokemonModule {}
