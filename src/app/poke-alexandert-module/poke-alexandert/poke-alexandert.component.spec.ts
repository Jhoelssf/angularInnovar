import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAlexandertComponent } from './poke-alexandert.component';

describe('PokeAlexandertComponent', () => {
  let component: PokeAlexandertComponent;
  let fixture: ComponentFixture<PokeAlexandertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeAlexandertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeAlexandertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
