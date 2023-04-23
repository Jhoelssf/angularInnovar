import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { IPokemonData } from 'src/app/shared/models/resGetPokemon.model';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-searched-pokemon',
  templateUrl: './searched-pokemon.component.html',
  styleUrls: ['./searched-pokemon.component.css']
})
export class SearchedPokemonComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
