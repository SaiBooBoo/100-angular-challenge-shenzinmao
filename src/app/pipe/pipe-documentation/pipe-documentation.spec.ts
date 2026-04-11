import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipeDocumentation } from './pipe-documentation';

describe('PipeDocumentation', () => {
  let component: PipeDocumentation;
  let fixture: ComponentFixture<PipeDocumentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeDocumentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDocumentation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
