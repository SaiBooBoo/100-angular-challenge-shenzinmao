import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgIf],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: true,
})
export class Card {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';
}
