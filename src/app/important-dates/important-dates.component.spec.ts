import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantDatesComponent } from './important-dates.component';

describe('ImportantDatesComponent', () => {
  let component: ImportantDatesComponent;
  let fixture: ComponentFixture<ImportantDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
