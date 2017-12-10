import { TestBed, async, inject } from '@angular/core/testing';

import { RequestUserGuard } from './request-user.guard';

describe('RequestUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestUserGuard]
    });
  });

  it('should ...', inject([RequestUserGuard], (guard: RequestUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
