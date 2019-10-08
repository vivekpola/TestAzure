import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { execstatusComponent } from './execstatus.component';

describe('execstatusComponent', () => {
  let component: execstatusComponent;
  let fixture: ComponentFixture<execstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ execstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(execstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
