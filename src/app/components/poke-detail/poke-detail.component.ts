import { Component, Input} from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from 'src/shared/pokemon';
@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent {
  @Input()
  public pokemon: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;
 
}



