import { Component, OnInit, Input} from '@angular/core';
import { RootObject } from 'src/app/ejemplo-modulo/ejemplo/model';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent implements OnInit {
  @Input() arrListPokemon! : RootObject[];
  constructor() { }

  ngOnInit(): void {
  }

}
