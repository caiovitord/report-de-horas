import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhPaginaComponent } from './rh-pagina.component';

describe('RhPaginaComponent', () => {
  let component: RhPaginaComponent;
  let fixture: ComponentFixture<RhPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
