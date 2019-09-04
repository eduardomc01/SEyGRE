import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigVisualPieComponent } from './big-visual-pie.component';

describe('BigVisualPieComponent', () => {
  let component: BigVisualPieComponent;
  let fixture: ComponentFixture<BigVisualPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigVisualPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigVisualPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
