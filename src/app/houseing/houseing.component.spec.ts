import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseingComponent } from './houseing.component';

describe('HouseingComponent', () => {
  let component: HouseingComponent;
  let fixture: ComponentFixture<HouseingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseingComponent]
    });
    fixture = TestBed.createComponent(HouseingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
