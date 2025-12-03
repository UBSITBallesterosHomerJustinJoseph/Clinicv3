import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabiesCase } from './rabies-case';

describe('RabiesCase', () => {
  let component: RabiesCase;
  let fixture: ComponentFixture<RabiesCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RabiesCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabiesCase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
