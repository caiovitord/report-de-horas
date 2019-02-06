import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqCsvTableComponent } from './req-csv-table.component';

describe('ReqCsvTableComponent', () => {
  let component: ReqCsvTableComponent;
  let fixture: ComponentFixture<ReqCsvTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqCsvTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqCsvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
