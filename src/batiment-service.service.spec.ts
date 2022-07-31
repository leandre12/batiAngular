import { TestBed } from '@angular/core/testing';

import { BatimentServiceService } from './batiment-service.service';

describe('BatimentServiceService', () => {
  let service: BatimentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatimentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
