import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCenter } from './ai-center';

describe('AiCenter', () => {
  let component: AiCenter;
  let fixture: ComponentFixture<AiCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCenter],
    }).compileComponents();

    fixture = TestBed.createComponent(AiCenter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
