import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqPageComponent } from './req-page.component';

describe('ReqPageComponent', () => {
  let component: ReqPageComponent;
  let fixture: ComponentFixture<ReqPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
