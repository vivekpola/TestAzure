import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCheckComponent } from './security-check.component';

describe('SecurityCheckComponent', () => {
  let component: SecurityCheckComponent;
  let fixture: ComponentFixture<SecurityCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
