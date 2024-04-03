import { TestBed } from '@angular/core/testing';

import { PetResourceServerService } from './pet-resource-server.service';

describe('PetResourceServerService', () => {
  let service: PetResourceServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetResourceServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
