import { Component, OnInit } from '@angular/core';
import { RootObject } from '../home/model';
import { PokemonsService } from 'src/app/shared/pokemons.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritePokemons! : Array<RootObject>;

  constructor(private pokeAction: PokemonsService) { }

  ngOnInit(): void {
    this.favoritePokemons = this.pokeAction.favoritePokemons;
  }

  deleteFromFavorites(pokemon: RootObject):void {
    this.pokeAction.favoritePokemons$.subscribe((obj) => {
      this.favoritePokemons = obj

    })

    Swal.fire({
      title: 'Delete to favorites',
      text: "¿Do you want to delete this pokemon from favorites?",
      showDenyButton: true,
      icon: "warning",
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
  }).then((result) => {
      if (result.isConfirmed) {
        this.pokeAction.deleteFavoritePokemon(pokemon)
        Swal.fire({ text: "pokemon has been deleted from favorites", icon: "success" })

      } else {

      }
  })

  }

}
