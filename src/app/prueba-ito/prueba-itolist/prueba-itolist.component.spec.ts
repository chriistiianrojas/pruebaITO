import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaITOListComponent } from './prueba-itolist.component';

describe('PruebaITOListComponent', () => {
  let component: PruebaITOListComponent;
  let fixture: ComponentFixture<PruebaITOListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaITOListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaITOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
