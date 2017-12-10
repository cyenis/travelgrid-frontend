import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTipIdComponent } from './single-tip-id.component';

describe('SingleTipIdComponent', () => {
  let component: SingleTipIdComponent;
  let fixture: ComponentFixture<SingleTipIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTipIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTipIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
