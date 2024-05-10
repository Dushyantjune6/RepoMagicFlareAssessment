import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopComponentComponent } from './top-component.component';

describe('TopComponentComponent', () => {
  let component: TopComponentComponent;
  let fixture: ComponentFixture<TopComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopComponentComponent]
    });
    fixture = TestBed.createComponent(TopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
