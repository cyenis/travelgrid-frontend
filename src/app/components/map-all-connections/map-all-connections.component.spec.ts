import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAllConnectionsComponent } from './map-all-connections.component';

describe('MapAllConnectionsComponent', () => {
  let component: MapAllConnectionsComponent;
  let fixture: ComponentFixture<MapAllConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAllConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAllConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
