import { TestBed } from '@angular/core/testing';

import { PegawaiService } from './pegawai.service';

describe('ServiceService', () => {
  let service: PegawaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PegawaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
