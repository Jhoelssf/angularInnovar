import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokefavComponent } from './pokefav.component';

describe('PokefavComponent', () => {
  let component: PokefavComponent;
  let fixture: ComponentFixture<PokefavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokefavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokefavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
