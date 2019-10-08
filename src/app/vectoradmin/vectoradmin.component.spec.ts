import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VectoradminComponent } from './vectoradmin.component';

describe('VectoradminComponent', () => {
  let component: VectoradminComponent;
  let fixture: ComponentFixture<VectoradminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VectoradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VectoradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
