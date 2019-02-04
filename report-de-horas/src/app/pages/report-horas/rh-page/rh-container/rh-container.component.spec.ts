import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhContainerComponent } from './rh-container.component';

describe('RhContainerComponent', () => {
  let component: RhContainerComponent;
  let fixture: ComponentFixture<RhContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
