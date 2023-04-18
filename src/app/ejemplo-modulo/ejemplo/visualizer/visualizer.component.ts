import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.css']
})
export class VisualizerComponent implements OnInit {

  @Input() imgPokemon: string = "";
  @Output() prevButton: EventEmitter<number | string> = new EventEmitter<number | string>(); 
  @Output() nextButton: EventEmitter<number | string> = new EventEmitter<number | string>(); 

  constructor() { }

  ngOnInit(): void {
  }

}
