import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeromainComponent } from './heromain.component';

describe('HeromainComponent', () => {
  let component: HeromainComponent;
  let fixture: ComponentFixture<HeromainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeromainComponent]
    });
    fixture = TestBed.createComponent(HeromainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
