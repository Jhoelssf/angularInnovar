import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'title-component',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  @Input() pokemonName: string | undefined = '';
  @Output() onChangePokemon: EventEmitter<number> = new EventEmitter<number>();

  pokemonId: number | undefined = 1;

  nextPokemon() {
    this.pokemonId = this.pokemonId! + 1;
    this.changePokemon(this.pokemonId);
  }

  previousPokemon() {
    this.pokemonId = this.pokemonId! - 1;
    this.changePokemon(this.pokemonId);
  }

  changePokemon(pokemonId: number) {
    this.onChangePokemon.emit(pokemonId);
  }
}
