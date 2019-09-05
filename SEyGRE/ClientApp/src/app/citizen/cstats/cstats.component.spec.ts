import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CstatsComponent } from './cstats.component';

describe('CstatsComponent', () => {
  let component: CstatsComponent;
  let fixture: ComponentFixture<CstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
