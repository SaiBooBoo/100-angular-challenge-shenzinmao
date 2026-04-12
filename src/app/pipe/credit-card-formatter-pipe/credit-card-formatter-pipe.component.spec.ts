import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardFormatterPipeComponent } from './credit-card-formatter-pipe.component';

describe('CreditCardFormatterPipeComponent', () => {
  let component: CreditCardFormatterPipeComponent;
  let fixture: ComponentFixture<CreditCardFormatterPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardFormatterPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardFormatterPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
