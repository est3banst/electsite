import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectComponent } from './services-sect.component';

describe('ServicesSectComponent', () => {
  let component: ServicesSectComponent;
  let fixture: ComponentFixture<ServicesSectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesSectComponent]
    });
    fixture = TestBed.createComponent(ServicesSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
