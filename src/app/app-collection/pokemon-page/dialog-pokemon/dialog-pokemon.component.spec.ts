import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPokemonComponent } from './dialog-pokemon.component';

describe('DialogPokemonComponent', () => {
  let component: DialogPokemonComponent;
  let fixture: ComponentFixture<DialogPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
