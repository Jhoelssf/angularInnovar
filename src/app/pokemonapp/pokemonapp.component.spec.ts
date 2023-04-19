import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonappComponent } from './pokemonapp.component';

describe('PokemonappComponent', () => {
  let component: PokemonappComponent;
  let fixture: ComponentFixture<PokemonappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
