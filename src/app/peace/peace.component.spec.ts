import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeaceComponent } from './peace.component';

describe('PeaceComponent', () => {
  let component: PeaceComponent;
  let fixture: ComponentFixture<PeaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeaceComponent]
    });
    fixture = TestBed.createComponent(PeaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
