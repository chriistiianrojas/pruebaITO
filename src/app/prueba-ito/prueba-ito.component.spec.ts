import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaITOComponent } from './prueba-ito.component';

describe('PruebaITOComponent', () => {
  let component: PruebaITOComponent;
  let fixture: ComponentFixture<PruebaITOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaITOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaITOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
