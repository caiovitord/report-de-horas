import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddRequisitoComponent } from './btn-add-requisito.component';

describe('BtnAddRequisitoComponent', () => {
  let component: BtnAddRequisitoComponent;
  let fixture: ComponentFixture<BtnAddRequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnAddRequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAddRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
