import { PokemonService } from './../../services/pokemon.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-poke-app',
  templateUrl: './poke-app.component.html',
  styleUrls: ['./poke-app.component.css']
})

export class PokeAppComponent {

constructor (public pokeService:PokemonService){} 

}