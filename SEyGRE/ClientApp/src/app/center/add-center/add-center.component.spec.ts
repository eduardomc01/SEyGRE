import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCenterComponent } from './add-center.component';

describe('AddCenterComponent', () => {
  let component: AddCenterComponent;
  let fixture: ComponentFixture<AddCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
