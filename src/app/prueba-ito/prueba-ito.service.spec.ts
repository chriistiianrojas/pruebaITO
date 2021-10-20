import { TestBed } from '@angular/core/testing';

import { PruebaITOService } from './prueba-ito.service';

describe('PruebaITOService', () => {
  let service: PruebaITOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PruebaITOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
