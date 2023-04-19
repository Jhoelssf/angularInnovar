import { Component, Input, OnInit } from '@angular/core';
import { Move, Stat } from '../pokemon-template';

@Component({
  selector: 'app-pokemon-general-info',
  templateUrl: './pokemon-general-info.component.html',
  styleUrls: ['./pokemon-general-info.component.css']
})
export class PokemonGeneralInfoComponent implements OnInit {
  @Input() pokemonStats : Stat[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
