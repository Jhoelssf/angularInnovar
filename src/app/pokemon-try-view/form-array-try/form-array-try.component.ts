import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-try',
  templateUrl: './form-array-try.component.html',
  styleUrls: ['./form-array-try.component.css']
})
export class FormArrayTryComponent{
  listOfPokemonId! : string[]

  formGetMorePokemons: FormGroup = this.fb.group({
      items: this.fb.array([]),
    });

  constructor(private fb: FormBuilder) {
  }

  get items(): FormArray {
    return this.formGetMorePokemons.get('items') as FormArray;
  }

  addItem() {
    let itemFormGroup = this.fb.group({
      idPokemon: new FormControl<string>('')
    });
    this.items.push(itemFormGroup);
    
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  submitItems() {
    console.log('Submit');
    console.log(this.formGetMorePokemons.value);
    console.log('---');
    this.listOfPokemonId = this.items.controls.map(itemControl => itemControl.value.idPokemon as string);
    console.log(this.listOfPokemonId);
  }

}
