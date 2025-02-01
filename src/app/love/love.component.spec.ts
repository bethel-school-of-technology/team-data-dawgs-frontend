import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveComponent } from './love.component';

describe('LoveComponent', () => {
  let component: LoveComponent;
  let fixture: ComponentFixture<LoveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoveComponent]
    });
    fixture = TestBed.createComponent(LoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
