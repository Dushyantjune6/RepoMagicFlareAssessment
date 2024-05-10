import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDisplayGridComponent } from './data-display-grid.component';

describe('DataDisplayGridComponent', () => {
  let component: DataDisplayGridComponent;
  let fixture: ComponentFixture<DataDisplayGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataDisplayGridComponent]
    });
    fixture = TestBed.createComponent(DataDisplayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
