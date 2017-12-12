import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesListEditorComponent } from './places-list-editor.component';

describe('PlacesListEditorComponent', () => {
  let component: PlacesListEditorComponent;
  let fixture: ComponentFixture<PlacesListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesListEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
