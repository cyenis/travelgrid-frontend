import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignleUserComponent } from './signle-user.component';

describe('SignleUserComponent', () => {
  let component: SignleUserComponent;
  let fixture: ComponentFixture<SignleUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignleUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
