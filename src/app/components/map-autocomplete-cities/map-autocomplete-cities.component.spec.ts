import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAutocompleteCitiesComponent } from './map-autocomplete-cities.component';

describe('MapAutocompleteCitiesComponent', () => {
  let component: MapAutocompleteCitiesComponent;
  let fixture: ComponentFixture<MapAutocompleteCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAutocompleteCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAutocompleteCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
