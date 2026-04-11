import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectiveDocumentation } from './directive-documentation';

describe('DirectiveDocumentation', () => {
  let component: DirectiveDocumentation;
  let fixture: ComponentFixture<DirectiveDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectiveDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDocumentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
