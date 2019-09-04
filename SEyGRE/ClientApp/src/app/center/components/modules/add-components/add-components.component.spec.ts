import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentsComponent } from './add-components.component';

describe('AddComponentsComponent', () => {
  let component: AddComponentsComponent;
  let fixture: ComponentFixture<AddComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
