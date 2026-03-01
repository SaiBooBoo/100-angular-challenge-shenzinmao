import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRating {
  @Input() public rating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== 5;
    return hasHalfStar;
  }

  public get emptyStar(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);

    return Array(totalEmptyStars).fill(0);
  }
}
