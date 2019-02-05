import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqNewPageComponent } from './req-new-page.component';

describe('ReqNewPageComponent', () => {
  let component: ReqNewPageComponent;
  let fixture: ComponentFixture<ReqNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
