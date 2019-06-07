import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEventsComponent } from './table-events.component';

describe('TableEventsComponent', () => {
  let component: TableEventsComponent;
  let fixture: ComponentFixture<TableEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
