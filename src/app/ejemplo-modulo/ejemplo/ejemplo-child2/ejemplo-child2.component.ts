import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Ability, Type } from '../model';

@Component({
  selector: 'app-ejemplo-child2',
  templateUrl: './ejemplo-child2.component.html',
  styleUrls: ['./ejemplo-child2.component.css'],
})
export class EjemploChild2Component implements OnInit, OnDestroy {
  @Input() abilities: Ability[] = [];
  @Input() typePokemon: Type[] = [];
  @Input() namePokemon: string = "";
  formGroupMoves: FormGroup = new FormGroup({
    arrayMoves: new FormArray([]),
  });
  formGroupTypes: FormGroup = new FormGroup({
    arrayTypes: new FormArray([]),
  });
  constructor() {}
  ngOnDestroy(): void {
    console.log('ejemplochild2 se ha destruido');
  }

  ngOnInit(): void {}
}
