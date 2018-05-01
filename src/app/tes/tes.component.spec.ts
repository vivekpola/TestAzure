import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tesComponent } from './tes.component';

describe('tesComponent', () => {
  let component: tesComponent;
  let fixture: ComponentFixture<tesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
