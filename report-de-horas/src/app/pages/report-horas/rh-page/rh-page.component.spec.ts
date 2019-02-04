import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhPageComponent } from './rh-page.component';

describe('RhPaginaComponent', () => {
  let component: RhPageComponent;
  let fixture: ComponentFixture<RhPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
