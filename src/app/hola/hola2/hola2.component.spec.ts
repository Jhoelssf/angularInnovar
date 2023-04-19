import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola2Component } from './hola2.component';

describe('Hola2Component', () => {
  let component: Hola2Component;
  let fixture: ComponentFixture<Hola2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hola2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
