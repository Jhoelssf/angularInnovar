import { Component, Input } from '@angular/core';
import { IPokemon } from '../models';

@Component({
  selector: 'skills-component',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  @Input() pokemonData: IPokemon | undefined = undefined;

}
