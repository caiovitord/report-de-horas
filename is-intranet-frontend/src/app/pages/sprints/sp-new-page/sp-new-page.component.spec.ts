import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpNewPageComponent } from './sp-new-page.component';

describe('SpNewPageComponent', () => {
  let component: SpNewPageComponent;
  let fixture: ComponentFixture<SpNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
