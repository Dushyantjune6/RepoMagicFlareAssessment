import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftSelectionNavBarComponent } from './shift-selection-nav-bar.component';

describe('ShiftSelectionNavBarComponent', () => {
  let component: ShiftSelectionNavBarComponent;
  let fixture: ComponentFixture<ShiftSelectionNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftSelectionNavBarComponent]
    });
    fixture = TestBed.createComponent(ShiftSelectionNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
