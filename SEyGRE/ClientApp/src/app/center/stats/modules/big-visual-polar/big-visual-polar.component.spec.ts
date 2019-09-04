import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigVisualPolarComponent } from './big-visual-polar.component';

describe('BigVisualPolarComponent', () => {
  let component: BigVisualPolarComponent;
  let fixture: ComponentFixture<BigVisualPolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigVisualPolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigVisualPolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
