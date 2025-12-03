import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterAnalysis } from './water-analysis';

describe('WaterAnalysis', () => {
  let component: WaterAnalysis;
  let fixture: ComponentFixture<WaterAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
