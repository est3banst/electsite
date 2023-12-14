import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegatComponent } from './navegat.component';

describe('NavegatComponent', () => {
  let component: NavegatComponent;
  let fixture: ComponentFixture<NavegatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavegatComponent]
    });
    fixture = TestBed.createComponent(NavegatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
