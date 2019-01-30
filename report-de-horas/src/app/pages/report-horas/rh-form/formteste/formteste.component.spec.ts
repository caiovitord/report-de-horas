import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtesteComponent } from './formteste.component';

describe('FormtesteComponent', () => {
  let component: FormtesteComponent;
  let fixture: ComponentFixture<FormtesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
