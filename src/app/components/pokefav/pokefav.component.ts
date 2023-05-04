import { Component,Input} from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from 'src/shared/pokemon';

@Component({
  selector: 'app-pokefav',
  templateUrl: './pokefav.component.html',
  styleUrls: ['./pokefav.component.css']
})
export class PokefavComponent {

  @Input()
  public pokemon: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;

}
