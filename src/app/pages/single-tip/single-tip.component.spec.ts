import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTipComponent } from './single-tip.component';

describe('SingleTipComponent', () => {
  let component: SingleTipComponent;
  let fixture: ComponentFixture<SingleTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
