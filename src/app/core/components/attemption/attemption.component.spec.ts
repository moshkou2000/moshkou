import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptionComponent } from './attemption.component';

describe('AttemptionComponent', () => {
  let component: AttemptionComponent;
  let fixture: ComponentFixture<AttemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttemptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
