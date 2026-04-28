import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInComponentComponent } from './linked-in-component.component';

describe('LinkedInComponentComponent', () => {
  let component: LinkedInComponentComponent;
  let fixture: ComponentFixture<LinkedInComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedInComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
