import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBallSuperComponent } from './dragon-ball-super.component';

describe('DragonBallSuperComponent', () => {
  let component: DragonBallSuperComponent;
  let fixture: ComponentFixture<DragonBallSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonBallSuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonBallSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
