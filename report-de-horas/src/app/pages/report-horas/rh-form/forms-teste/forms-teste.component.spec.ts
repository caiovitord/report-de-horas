import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTesteComponent } from './forms-teste.component';

describe('FormsTesteComponent', () => {
  let component: FormsTesteComponent;
  let fixture: ComponentFixture<FormsTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
