import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterPostComponentComponent } from './twitter-post-component.component';

describe('TwitterPostComponentComponent', () => {
  let component: TwitterPostComponentComponent;
  let fixture: ComponentFixture<TwitterPostComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterPostComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
