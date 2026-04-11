import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentDocumentation } from './component-documentation';

describe('ComponentDocumentation', () => {
  let component: ComponentDocumentation;
  let fixture: ComponentFixture<ComponentDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDocumentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
