import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundTrackComponent } from './sound-track.component';

describe('SoundTrackComponent', () => {
  let component: SoundTrackComponent;
  let fixture: ComponentFixture<SoundTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
