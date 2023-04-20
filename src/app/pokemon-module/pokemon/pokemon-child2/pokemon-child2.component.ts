import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Move } from '../model';

@Component({
  selector: 'app-pokemon-child2',
  templateUrl: './pokemon-child2.component.html',
  styleUrls: ['./pokemon-child2.component.css']
})
export class PokemonChild2Component implements OnInit, OnDestroy {
  @Input() moves: Move[] = [];
  formGroupMoves: FormGroup = new FormGroup({
    arrayMoves: new FormArray([]),
  });

  constructor() { }
  ngOnDestroy(): void {
    console.log('pokemonchild2 se ha destruido');
  }

  ngOnInit(): void {
  } 

}
