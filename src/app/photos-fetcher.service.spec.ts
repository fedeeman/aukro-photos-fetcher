import { TestBed } from '@angular/core/testing';

import { PhotosFetcherService } from './photos-fetcher.service';

describe('PhotosFetcherService', () => {
  let service: PhotosFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
