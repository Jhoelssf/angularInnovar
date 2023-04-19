import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola3Component } from './hola3.component';

describe('Hola3Component', () => {
  let component: Hola3Component;
  let fixture: ComponentFixture<Hola3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hola3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
