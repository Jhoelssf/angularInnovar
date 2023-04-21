import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PokemonSearchManagementService } from 'src/app/shared/pokemon-search-management.service';

@Component({
  selector: 'app-pokemon-form-search',
  templateUrl: './pokemon-form-search.component.html',
  styleUrls: ['./pokemon-form-search.component.css'],
})
export class PokemonFormSearchComponent implements OnInit, OnDestroy {
  pokemonName = '';
  pokemonGroupControl!: FormGroup;
  subscription!: Subscription;
  canSearch : boolean = true;

  constructor(
    private frmBuilder: FormBuilder,
    private searchPokemonSrv: PokemonSearchManagementService
  ) {}

  ngOnInit() {
    this.pokemonGroupControl = this.frmBuilder.group({
      name: '',
    });
    this.subscription = this.pokemonGroupControl.controls[
      'name'
    ].valueChanges.subscribe((newPokeName) => {
      this.calculateSearchResult(newPokeName);
    });
  }

  calculateSearchResult(newPokeName: string) {
    if(this.canSearch && newPokeName.length >= 2){
      this.canSearch = false;
      this.searchPokemonSrv.setSearchPokemonResult(newPokeName);
    }
    setTimeout(()=>{
      this.canSearch = true;
    },2000)
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}