import { Component, Input, OnInit,Inject } from '@angular/core';
import { PokemonsService } from 'src/app/shared/pokemons.service';
import { RootObject } from '../model_pokemon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface PokemonData {
  pokemonData: RootObject;
}


@Component({
  selector: 'app-dialoge-card',
  templateUrl: './dialoge-card.component.html',
  styleUrls: ['./dialoge-card.component.css']
})
export class DialogeCardComponent implements OnInit {

  // @Input('name_actual_pokemon') name_pokemon: string;

  infoPokemon!: RootObject ;

  constructor(


    public dialogRef: MatDialogRef<DialogeCardComponent>,
    private service: PokemonsService,
    @Inject(MAT_DIALOG_DATA) public data : PokemonData

  ) {
    this.infoPokemon = data.pokemonData
  }
  @Input() name_actual_pokemon!: string | number;
  @Input() lastName: string = "";


  ngOnInit(): void {
    // this.service.getPokemon(this.id_pokemon).subscribe( (respuesta) =>{
    //   this.infoPokemon = respuesta;
    // })
  }

}
