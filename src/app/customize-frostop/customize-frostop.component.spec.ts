import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFrostopComponent } from './customize-frostop.component';

describe('CustomizeFrostopComponent', () => {
  let component: CustomizeFrostopComponent;
  let fixture: ComponentFixture<CustomizeFrostopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeFrostopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeFrostopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
