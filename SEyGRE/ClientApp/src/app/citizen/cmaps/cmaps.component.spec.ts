import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmapsComponent } from './cmaps.component';

describe('CmapsComponent', () => {
  let component: CmapsComponent;
  let fixture: ComponentFixture<CmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
