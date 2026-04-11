import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceDocumentation } from './service-documentation';

describe('ServiceDocumentation', () => {
  let component: ServiceDocumentation;
  let fixture: ComponentFixture<ServiceDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDocumentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
