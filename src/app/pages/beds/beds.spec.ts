import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beds } from './beds';

describe('Beds', () => {
  let component: Beds;
  let fixture: ComponentFixture<Beds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Beds],
    }).compileComponents();

    fixture = TestBed.createComponent(Beds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
