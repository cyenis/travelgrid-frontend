import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAutocompletePlacesComponent } from './map-autocomplete-places.component';

describe('MapAutocompletePlacesComponent', () => {
  let component: MapAutocompletePlacesComponent;
  let fixture: ComponentFixture<MapAutocompletePlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAutocompletePlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAutocompletePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
