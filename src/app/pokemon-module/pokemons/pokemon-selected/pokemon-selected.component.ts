import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '../model';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.component.html',
  styleUrls: ['./pokemon-selected.component.css']
})
export class PokemonSelectedComponent implements OnInit, OnDestroy {
  @Input() pokemon: Pokemon | undefined = undefined;
  formGroupAbilities: FormGroup = new FormGroup({
    arrayMoves: new FormArray([])
  })

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('pokemon se ha destruido')
  }

}
