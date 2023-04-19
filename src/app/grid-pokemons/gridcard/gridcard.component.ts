import { PokemonObject } from './../../models/pokemonObj';
import { Component, OnInit, Input } from '@angular/core';
import { PokemonAPIService } from 'src/app/shared/pokemon-api.service';

@Component({
  selector: 'app-gridcard',
  templateUrl: './gridcard.component.html',
  styleUrls: ['./gridcard.component.css']
})
export class GridcardComponent implements OnInit {
  @Input() pokemon!: PokemonObject;

  constructor(
  ) { }

  ngOnInit(): void {
  }
  

}
