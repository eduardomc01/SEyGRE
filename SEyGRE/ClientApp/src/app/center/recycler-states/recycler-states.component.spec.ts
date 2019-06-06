import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclerStatesComponent } from './recycler-states.component';

describe('RecyclerStatesComponent', () => {
  let component: RecyclerStatesComponent;
  let fixture: ComponentFixture<RecyclerStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclerStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclerStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
