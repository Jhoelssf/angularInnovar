import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '../model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.component.html',
  styleUrls: ['./pokemon-selected.component.css']
})
export class PokemonSelectedComponent implements OnInit, OnDestroy {
  @Input() pokemon!: Pokemon;
  formGroupAbilities: FormGroup = this.fb.group({
    abilities: this.fb.array([])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pokemon.abilities.forEach(ability => {
      this.abilities.push(this.fb.control(ability.ability.name));
    });
  }

  ngOnDestroy(): void {
    console.log('pokemon se ha destruido')
  }

  get abilities(){
    return this.formGroupAbilities.controls['abilities'] as FormArray;
  }

  addAbility(ability: string | null){
    this.abilities.push(this.fb.control(ability));
  }

}
