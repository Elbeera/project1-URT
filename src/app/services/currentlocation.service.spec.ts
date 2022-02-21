import { TestBed } from '@angular/core/testing';

import { CurrentlocationService } from './currentlocation.service';

describe('CurrentlocationService', () => {
  let service: CurrentlocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentlocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
