import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDetailsComponent } from './destination-details.component';

describe('DestinationDetailsComponent', () => {
  let component: DestinationDetailsComponent;
  let fixture: ComponentFixture<DestinationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
