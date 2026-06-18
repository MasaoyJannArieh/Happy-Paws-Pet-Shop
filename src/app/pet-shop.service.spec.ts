import { TestBed } from '@angular/core/testing';

import { PetShop } from './pet-shop.service';

describe('PetShop', () => {
  let service: PetShop;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetShop);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
