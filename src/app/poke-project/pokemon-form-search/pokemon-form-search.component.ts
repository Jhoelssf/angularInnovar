import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-form-search',
  templateUrl: './pokemon-form-search.component.html',
  styleUrls: ['./pokemon-form-search.component.css'],
})
export class PokemonFormSearchComponent implements OnInit, OnDestroy{
  pokemonName = '';
  pokemonGroupControl!: FormGroup;
  subscription!: Subscription;

  constructor(private frmBuilder: FormBuilder) {}

  ngOnInit() {
    this.pokemonGroupControl = this.frmBuilder.group({
      name: '',
    });
    this.subscription = this.pokemonGroupControl.controls['name'].valueChanges.subscribe(
        (newPokeName) => {
          console.log(newPokeName);
        }
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
