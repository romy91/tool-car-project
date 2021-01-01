import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentRollsCalcComponent } from './patent-rolls-calc.component';

describe('PatentRollsCalcComponent', () => {
  let component: PatentRollsCalcComponent;
  let fixture: ComponentFixture<PatentRollsCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentRollsCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentRollsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
