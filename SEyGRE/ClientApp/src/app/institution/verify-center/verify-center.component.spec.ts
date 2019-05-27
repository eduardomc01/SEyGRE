import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCenterComponent } from './verify-center.component';

describe('VerifyCenterComponent', () => {
  let component: VerifyCenterComponent;
  let fixture: ComponentFixture<VerifyCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
