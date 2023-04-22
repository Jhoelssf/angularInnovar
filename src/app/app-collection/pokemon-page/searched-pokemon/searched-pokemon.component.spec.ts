import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedPokemonComponent } from './searched-pokemon.component';

describe('SearchedPokemonComponent', () => {
  let component: SearchedPokemonComponent;
  let fixture: ComponentFixture<SearchedPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
