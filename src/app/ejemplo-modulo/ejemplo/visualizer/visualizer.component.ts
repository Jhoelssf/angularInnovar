import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  @Input() imgPokemon: string = "";
  @Input() idPokemon: number = 1;

  @Output() changeNextPokemon: EventEmitter<number | string> = new EventEmitter<number | string>(); 
  @Output() changePrevPokemon: EventEmitter<number | string> = new EventEmitter<number | string>(); 

  constructor() { }

  ngOnInit(): void {
  }

  nextButton(){
    this.idPokemon++;
    if(this.idPokemon===1011) this.idPokemon = 1;
    this.changeNextPokemon.emit(this.idPokemon);
  }

  prevButton(){
    this.idPokemon--;
    if(this.idPokemon===0) this.idPokemon = 1010;
    this.changeNextPokemon.emit(this.idPokemon);
  }

}
