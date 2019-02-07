import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDataTableComponent } from './more-data-table.component';

describe('MoreDataTableComponent', () => {
  let component: MoreDataTableComponent;
  let fixture: ComponentFixture<MoreDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
