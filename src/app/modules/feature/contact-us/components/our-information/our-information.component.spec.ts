import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurInformationComponent } from './our-information.component';

describe('OurInformationComponent', () => {
  let component: OurInformationComponent;
  let fixture: ComponentFixture<OurInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurInformationComponent]
    });
    fixture = TestBed.createComponent(OurInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
