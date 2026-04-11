import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfPage } from './top-of-page';

describe('TopOfPage', () => {
  let component: TopOfPage;
  let fixture: ComponentFixture<TopOfPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopOfPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopOfPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
