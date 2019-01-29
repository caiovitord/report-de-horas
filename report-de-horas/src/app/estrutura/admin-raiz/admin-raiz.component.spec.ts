import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRaizComponent } from './admin-raiz.component';

describe('AdminRaizComponent', () => {
  let component: AdminRaizComponent;
  let fixture: ComponentFixture<AdminRaizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRaizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRaizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
