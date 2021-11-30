import { TestBed } from '@angular/core/testing';

import { BaseInterceptor } from './base.interceptor';

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseInterceptor = TestBed.get(BaseInterceptor);
    expect(service).toBeTruthy();
  });
});
