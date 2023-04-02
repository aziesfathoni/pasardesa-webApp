import { TestBed } from '@angular/core/testing';

import { KarcisService } from './karcis.service';

describe('KarcisService', () => {
  let service: KarcisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KarcisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
