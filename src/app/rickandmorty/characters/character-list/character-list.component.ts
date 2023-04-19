import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../charactermodels';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input() characters!: Character[];
  hoveredId: number | null = null; 

  constructor() { }

  ngOnInit(): void {
  }

  toggleHover(id: number | null){
    this.hoveredId = id
  }
}
