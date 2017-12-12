import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAllMyTipsComponent } from './map-all-my-tips.component';

describe('MapAllMyTipsComponent', () => {
  let component: MapAllMyTipsComponent;
  let fixture: ComponentFixture<MapAllMyTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAllMyTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAllMyTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
