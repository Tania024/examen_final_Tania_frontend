import { TestBed } from '@angular/core/testing';

import { RecargaElectronicaService } from './recarga-electronica.service';

describe('RecargaElectronicaService', () => {
  let service: RecargaElectronicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecargaElectronicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
