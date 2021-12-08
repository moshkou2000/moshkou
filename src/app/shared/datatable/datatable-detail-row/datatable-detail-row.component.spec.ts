import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableDetailRowComponent } from './datatable-detail-row.component';

describe('DatatableDetailRowComponent', () => {
  let component: DatatableDetailRowComponent;
  let fixture: ComponentFixture<DatatableDetailRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableDetailRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableDetailRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
