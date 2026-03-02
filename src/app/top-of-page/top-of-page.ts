import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  imports: [],
  templateUrl: './top-of-page.html',
  styleUrl: './top-of-page.scss',
})
export class TopOfPage {

  constructor(private viewportScroller: ViewportScroller) {

  }

  public gotoTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
