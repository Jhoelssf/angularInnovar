import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAppComponent } from './poke-app.component';

describe('PokeAppComponent', () => {
  let component: PokeAppComponent;
  let fixture: ComponentFixture<PokeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
