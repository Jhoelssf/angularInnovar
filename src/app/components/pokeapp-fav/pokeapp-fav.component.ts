import { Component} from '@angular/core';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-pokeapp-fav',
  templateUrl: './pokeapp-fav.component.html',
  styleUrls: ['./pokeapp-fav.component.css']
})
export class PokeappFavComponent{

  constructor (public pokeService:PokemonService){} 


}
