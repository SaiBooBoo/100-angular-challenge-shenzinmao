import { Component, Input } from '@angular/core';
import { CommonModule, NgIf} from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [CommonModule, NgIf],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: true,
})
export class Card {
 @Input() public title = '';
 @Input() public subTitle = '';
 @Input() public iconClasses = '';
}
