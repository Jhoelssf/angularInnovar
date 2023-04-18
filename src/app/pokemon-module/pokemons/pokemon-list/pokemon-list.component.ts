import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonItem } from '../model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: PokemonItem[] = [];
  @Output() onChangePokemon: EventEmitter<number | string> = new EventEmitter<number | string>();

  constructor() { }

  ngOnInit(): void {
  }

  changePokemon(id: number | string) {
    this.onChangePokemon.emit(id)
  }

}
