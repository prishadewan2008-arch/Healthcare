import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMap } from './district-map';

describe('DistrictMap', () => {
  let component: DistrictMap;
  let fixture: ComponentFixture<DistrictMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictMap],
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
