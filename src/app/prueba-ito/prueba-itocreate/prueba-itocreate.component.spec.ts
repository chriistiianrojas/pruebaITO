import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaITOCreateComponent } from './prueba-itocreate.component';

describe('PruebaITOCreateComponent', () => {
  let component: PruebaITOCreateComponent;
  let fixture: ComponentFixture<PruebaITOCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaITOCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaITOCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
