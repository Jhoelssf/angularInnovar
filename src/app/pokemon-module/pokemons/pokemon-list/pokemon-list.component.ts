import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonItem } from '../model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: PokemonItem[] = [];
  @Input() page: number = 0;
  @Input() n_pages: number = 0;
  @Output() onChangePokemon: EventEmitter<number | string> = new EventEmitter<number | string>();
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();

  pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.n_pages; i++) {
      this.pages.concat(i);
    }
  }

  changePokemon(id: number | string) {
    this.onChangePokemon.emit(id);
  }

  changePage(page: number){
    if(page>=0 && page <= this.n_pages)
      this.onChangePage.emit(page);
  }

}
