import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopeComponent } from './hope.component';

describe('HopeComponent', () => {
  let component: HopeComponent;
  let fixture: ComponentFixture<HopeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HopeComponent]
    });
    fixture = TestBed.createComponent(HopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
