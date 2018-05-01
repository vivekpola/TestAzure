import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cmfaComponent } from './cmfa.component';

describe('cmfaComponent', () => {
  let component: cmfaComponent;
  let fixture: ComponentFixture<cmfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cmfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cmfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
