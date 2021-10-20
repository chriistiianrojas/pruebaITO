import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaITOEditComponent } from './prueba-itoedit.component';

describe('PruebaITOEditComponent', () => {
  let component: PruebaITOEditComponent;
  let fixture: ComponentFixture<PruebaITOEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaITOEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaITOEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
