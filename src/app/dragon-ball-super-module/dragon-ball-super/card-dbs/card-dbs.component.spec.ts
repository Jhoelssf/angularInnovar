import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDbsComponent } from './card-dbs.component';

describe('CardDbsComponent', () => {
  let component: CardDbsComponent;
  let fixture: ComponentFixture<CardDbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
