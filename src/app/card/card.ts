import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class Card {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';
}
