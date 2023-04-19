import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from '../pokemon-template';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-view-pokemon-number-n',
  templateUrl: './view-pokemon-number-n.component.html',
  styleUrls: ['./view-pokemon-number-n.component.css']
})
export class ViewPokemonNumberNComponent implements OnInit {
  @Input() NumberPokemon : string | undefined = '132';
  objectPokemon! : RootObject | undefined;
  baseURL : string = 'https://pokeapi.co/api/v2/pokemon/';
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('OnInit')
    this.http.get<RootObject>(`${this.baseURL}${this.NumberPokemon}`).subscribe(
      (response)=>{
        this.objectPokemon = response;
        console.log(this.objectPokemon);
      }
    )
  }

}
