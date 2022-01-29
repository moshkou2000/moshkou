import { TestBed } from '@angular/core/testing';

import { InfoSidenavService } from './info-sidenav.service';

describe('InfoSidenavService', () => {
  let service: InfoSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
