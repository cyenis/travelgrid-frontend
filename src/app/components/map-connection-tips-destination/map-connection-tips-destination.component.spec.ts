import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapConnectionTipsDestinationComponent } from './map-connection-tips-destination.component';

describe('MapConnectionTipsDestinationComponent', () => {
  let component: MapConnectionTipsDestinationComponent;
  let fixture: ComponentFixture<MapConnectionTipsDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapConnectionTipsDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapConnectionTipsDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
