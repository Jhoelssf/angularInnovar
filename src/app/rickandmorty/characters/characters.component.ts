import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../charactermodels';
import { RickandmortyService } from '../../shared/rickandmorty.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  unsubscribe$: Subject<boolean> = new Subject<boolean>();

  constructor(private rickandmortyService: RickandmortyService) { }

  ngOnInit(): void {
    this.getCharacters();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  getCharacters(): void{
    this.rickandmortyService.getCharacters(1)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res) =>{
      this.characters = res.results;
      console.log(this.characters);
    })
  }
}
