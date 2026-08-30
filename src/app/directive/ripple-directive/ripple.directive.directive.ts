import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {

  @Input() public appRipple = 'ripple';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  onMouseUp($event: MouseEvent) {
    const host: HTMLElement = this.element.nativeElement;
    this.renderer.setStyle(host, 'position', 'relative');
    this.renderer.setStyle(host, 'overflow', 'hidden');

    const hostRect = host.getBoundingClientRect();

    const x = $event.clientX - hostRect.left;
    const y = $event.clientY - hostRect.top;

    const size = Math.max(hostRect.width, hostRect.height) * 2;

    const ink = this.renderer.createElement('span');
    this.renderer.addClass(ink, 'ripple-ink');
    this.renderer.setStyle(ink, 'width', `${size}px`);
    this.renderer.setStyle(ink, 'height', `${size}px`);
    this.renderer.setStyle(ink, 'left', `${x - size / 2}px`);
    this.renderer.setStyle(ink, 'top', `${y - size / 2}px`);

    this.renderer.addClass(host, this.appRipple);
    this.renderer.appendChild(host, ink);

    this.renderer.listen(ink, 'animationend', () => {
      this.renderer.removeChild(host, ink);
    });
  }
}