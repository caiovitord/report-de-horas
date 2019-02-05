import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhNewPageComponent } from './rh-new-page.component';

describe('RhPaginaComponent', () => {
  let component: RhNewPageComponent;
  let fixture: ComponentFixture<RhNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhNewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
