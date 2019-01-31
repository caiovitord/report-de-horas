import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRemoverRequisitoComponent } from './btn-remover-requisito.component';

describe('BtnRemoverRequisitoComponent', () => {
  let component: BtnRemoverRequisitoComponent;
  let fixture: ComponentFixture<BtnRemoverRequisitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnRemoverRequisitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRemoverRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
