import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  imports: [],
  templateUrl: './top-of-page.html',
  styleUrl: './top-of-page.scss',
})
export class TopOfPage {
  public isShown = false;
  constructor(private viewportScroller: ViewportScroller) {

  }

  @HostListener('window:scroll') onWindowScroll(){
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  public gotoTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
