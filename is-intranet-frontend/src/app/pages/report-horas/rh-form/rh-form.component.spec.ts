import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhFormComponent } from './rh-form.component';

describe('RhFormComponent', () => {
  let component: RhFormComponent;
  let fixture: ComponentFixture<RhFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
