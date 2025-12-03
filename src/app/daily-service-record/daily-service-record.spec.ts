import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyServiceRecord } from './daily-service-record';

describe('DailyServiceRecord', () => {
  let component: DailyServiceRecord;
  let fixture: ComponentFixture<DailyServiceRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyServiceRecord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyServiceRecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
