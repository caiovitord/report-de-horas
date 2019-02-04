import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRemoveRequisiteComponent } from './btn-remove-requisite.component';

describe('BtnRemoverRequisitoComponent', () => {
  let component: BtnRemoveRequisiteComponent;
  let fixture: ComponentFixture<BtnRemoveRequisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnRemoveRequisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRemoveRequisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
