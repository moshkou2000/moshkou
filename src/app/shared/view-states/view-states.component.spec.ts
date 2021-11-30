import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStatesComponent } from './view-states.component';

describe('ViewStatesComponent', () => {
  let component: ViewStatesComponent;
  let fixture: ComponentFixture<ViewStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
