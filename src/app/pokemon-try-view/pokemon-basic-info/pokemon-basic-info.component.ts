import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-basic-info',
  templateUrl: './pokemon-basic-info.component.html',
  styleUrls: ['./pokemon-basic-info.component.css']
})
export class PokemonBasicInfoComponent implements OnInit {
  @Input() pokemonName: string | undefined;
  @Input() pokemonImage: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
