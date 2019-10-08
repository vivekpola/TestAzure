import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal2017Component } from './goal-2017.component';

describe('Goal2017Component', () => {
  let component: Goal2017Component;
  let fixture: ComponentFixture<Goal2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goal2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goal2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
