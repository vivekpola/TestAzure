import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Goal2016Component } from './goal-2016.component';

describe('Goal2016Component', () => {
  let component: Goal2016Component;
  let fixture: ComponentFixture<Goal2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Goal2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Goal2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
