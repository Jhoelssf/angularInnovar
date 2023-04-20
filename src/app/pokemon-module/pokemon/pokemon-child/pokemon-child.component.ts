import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,} from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-child',
  templateUrl: './pokemon-child.component.html',
  styleUrls: ['./pokemon-child.component.css']
})
export class PokemonChildComponent implements OnInit, OnDestroy {

  // @Input() namePokemon = '';
  @Input() namePokemon: string | undefined = '';
  @Output() onChangePokemon: EventEmitter<number | string> = new EventEmitter<
  number | string
  >();
  
  formGroupPokemon: FormGroup = this.fb.group({
    idpokemon: this.fb.control([''])
  });

  get idpokemon(): FormControl {
    return this.formGroupPokemon.get('idpokemon') as FormControl;
  }
  
  constructor(private fb:FormBuilder) { }

  ngOnDestroy(): void{
      console.log('pokemon child se ha destruido')
  }

  changePokemon(){
    this.onChangePokemon.emit(this.idpokemon.value)
  }
  ngOnInit(): void {}
  

}
