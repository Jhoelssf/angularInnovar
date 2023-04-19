import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-barfilter',
  templateUrl: './barfilter.component.html',
  styleUrls: ['./barfilter.component.css']
})
export class BarfilterComponent implements OnInit {
  @Output() filterByTypes: EventEmitter<string> = new EventEmitter<string>();

  public formFilter!: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.formFilter = this.fb.group({
      typeInput: ['']
    })
  }

  filtrar(){
    let valor = this.formFilter.value.typeInput;
    this.filterByTypes.emit(valor);
  }

}
