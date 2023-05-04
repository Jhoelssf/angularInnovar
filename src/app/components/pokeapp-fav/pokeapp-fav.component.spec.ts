import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeappFavComponent } from './pokeapp-fav.component';

describe('PokeappFavComponent', () => {
  let component: PokeappFavComponent;
  let fixture: ComponentFixture<PokeappFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeappFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeappFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
