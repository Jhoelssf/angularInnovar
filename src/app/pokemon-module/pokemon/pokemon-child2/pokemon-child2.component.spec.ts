import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonChild2Component } from './pokemon-child2.component';

describe('PokemonChild2Component', () => {
  let component: PokemonChild2Component;
  let fixture: ComponentFixture<PokemonChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
