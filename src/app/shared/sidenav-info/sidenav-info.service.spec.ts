import { TestBed } from '@angular/core/testing';

import { SidenavInfoService } from './sidenav-info.service';

describe('SidenavInfoService', () => {
  let service: SidenavInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
