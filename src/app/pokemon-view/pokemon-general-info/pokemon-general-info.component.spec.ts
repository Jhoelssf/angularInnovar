import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGeneralInfoComponent } from './pokemon-general-info.component';

describe('PokemonGeneralInfoComponent', () => {
  let component: PokemonGeneralInfoComponent;
  let fixture: ComponentFixture<PokemonGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonGeneralInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
