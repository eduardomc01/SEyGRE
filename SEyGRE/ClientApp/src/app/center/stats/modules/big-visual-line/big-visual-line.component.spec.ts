import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigVisualLineComponent } from './big-visual-line.component';

describe('BigVisualLineComponent', () => {
  let component: BigVisualLineComponent;
  let fixture: ComponentFixture<BigVisualLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigVisualLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigVisualLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
