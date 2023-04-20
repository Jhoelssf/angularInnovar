import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeCardComponent } from './dialoge-card.component';

describe('DialogeCardComponent', () => {
  let component: DialogeCardComponent;
  let fixture: ComponentFixture<DialogeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
