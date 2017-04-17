import { TestBed, inject } from '@angular/core/testing';

import { ForumsService } from './forums.service';

describe('ForumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumsService]
    });
  });

  it('should ...', inject([ForumsService], (service: ForumsService) => {
    expect(service).toBeTruthy();
  }));
});
