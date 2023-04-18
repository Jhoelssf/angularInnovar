import { Component, OnInit } from '@angular/core';
import { RootObject } from '../pokemon-template';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {
  objectPokemon! : RootObject | undefined;
  baseURL : string = 'https://pokeapi.co/api/v2/pokemon/';
  getNewPokemonFormGroup : FormGroup = new FormGroup({
    newPokemonId: new FormControl<string>('')
  });
  
  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('OnInit')
    this.http.get<RootObject>(`${this.baseURL}ditto`).subscribe(
      (response)=>{
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      }
    )
  }

  changePokemon(): void {
    console.log('Change-Pokemon');
    this.http.get<RootObject>(`${this.baseURL}${this.newPokemonId.value}`).subscribe(
      (response)=>{
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      }
    )
    console.log(this.newPokemonId.value);
  }

  get newPokemonId(): FormControl {
    return this.getNewPokemonFormGroup.get('newPokemonId') as FormControl;
  }
}
