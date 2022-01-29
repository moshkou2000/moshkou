import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableFilterComponent } from './datatable-filter.component';

describe('DatatableFilterComponent', () => {
  let component: DatatableFilterComponent;
  let fixture: ComponentFixture<DatatableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
