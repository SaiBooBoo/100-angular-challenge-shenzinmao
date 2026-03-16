import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-cut-out',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-cut-out.html',
  styleUrl: './banner-cut-out.scss',
})
export class BannerCutOut {
  @Input() public title = '';
  @Input() public imageUrl = '';

  get backgroundStyle(): string {
    return this.imageUrl
      ? `url(${this.imageUrl}) center/cover no-repeat`
      : 'linear-gradient(to bottom, #007bff, #0056b3)';
  }
}
