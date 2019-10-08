import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { execreportComponent } from './execreport.component';

describe('execreportComponent', () => {
  let component: execreportComponent;
  let fixture: ComponentFixture<execreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ execreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(execreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
