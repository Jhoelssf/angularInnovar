import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePokemonComponent } from './favourite-pokemon.component';

describe('FavouritePokemonComponent', () => {
  let component: FavouritePokemonComponent;
  let fixture: ComponentFixture<FavouritePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritePokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
