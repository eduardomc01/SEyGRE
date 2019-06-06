import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsComponentsComponent } from './actions-components.component';

describe('ActionsComponentsComponent', () => {
  let component: ActionsComponentsComponent;
  let fixture: ComponentFixture<ActionsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
