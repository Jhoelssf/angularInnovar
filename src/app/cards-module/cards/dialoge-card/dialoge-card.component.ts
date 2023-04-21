import { Component, Input, OnInit,Inject } from '@angular/core';
import { PokemonsService } from 'src/app/shared/pokemons.service';
import { RootObject ,Type} from '../model_pokemon';
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

  favorites: string[] = [];
  img_default_front:boolean = true;
  img_shiny_front:boolean = true;
  url_img_default:string = "";
  url_img_shiny:string = "";
  
  url_img_null = "https://www.pngitem.com/pimgs/m/30-302283_pikachu-pokmon-go-silhouette-drawing-whos-that-pokemon.png"

  array_types!: Type[] ;

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
    this.onSetImageNull(this.infoPokemon)
    console.log(this.infoPokemon)
    this.array_types = this.infoPokemon.types

  }

  onAddFavorites(pokemon: string ){
    this.favorites.push(pokemon);
    console.log(this.favorites)


  }
  //funcion para colocar imagen
  onSetImageNull(Pokemon: RootObject){
    if(Pokemon.sprites.front_default == null){
      Pokemon.sprites.front_default = this.url_img_null
    }
    if(Pokemon.sprites.back_default == null){
      Pokemon.sprites.back_default = this.url_img_null
    }

    if(Pokemon.sprites.front_shiny == null){
      Pokemon.sprites.front_shiny = this.url_img_null
    }
    if(Pokemon.sprites.back_shiny == null){
      Pokemon.sprites.back_shiny = this.url_img_null
    }
    this.url_img_default = Pokemon.sprites.front_default;
    this.url_img_shiny = Pokemon.sprites.front_shiny;

  }
  onImagePokemonDefault(Pokemon:RootObject){
    if(this.img_default_front){
      this.img_default_front = false;
      this.url_img_default= Pokemon.sprites.back_default
    }else{
      this.img_default_front = true;
      this.url_img_default= Pokemon.sprites.front_default;
    }

  }
  onImagePokemonShiny(Pokemon:RootObject){
    if(this.img_shiny_front){
      this.img_shiny_front = false;
      this.url_img_shiny= Pokemon.sprites.back_shiny
    }else{
      this.img_shiny_front = true;
      this.url_img_shiny= Pokemon.sprites.front_shiny;
    }

  }
  onChangeToBack(){

  }

}
