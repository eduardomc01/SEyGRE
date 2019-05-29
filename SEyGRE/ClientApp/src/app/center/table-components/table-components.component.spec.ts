import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponentsComponent } from './table-components.component';

describe('TableComponentsComponent', () => {
  let component: TableComponentsComponent;
  let fixture: ComponentFixture<TableComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
