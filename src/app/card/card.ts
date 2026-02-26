import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
 @Input() public title = '';
 @Input() public subTitle = '';
 @Input() public iconClasses = '';
}
