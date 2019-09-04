import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigVisualBarsComponent } from './big-visual-bars.component';

describe('BigVisualBarsComponent', () => {
  let component: BigVisualBarsComponent;
  let fixture: ComponentFixture<BigVisualBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigVisualBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigVisualBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
