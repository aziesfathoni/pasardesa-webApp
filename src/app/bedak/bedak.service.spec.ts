import { TestBed } from '@angular/core/testing';

import { BedakService } from './bedak.service';

describe('BedakService', () => {
  let service: BedakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
