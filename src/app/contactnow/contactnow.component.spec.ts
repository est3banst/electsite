import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnowComponent } from './contactnow.component';

describe('ContactnowComponent', () => {
  let component: ContactnowComponent;
  let fixture: ComponentFixture<ContactnowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactnowComponent]
    });
    fixture = TestBed.createComponent(ContactnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
