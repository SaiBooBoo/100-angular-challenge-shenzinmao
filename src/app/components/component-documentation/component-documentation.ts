import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../card/card';
import { Accordion } from '../../accordion/accordion';
import { ProgressBar } from '../../progress-bar/progress-bar';
import { StarRating } from '../../star-rating/star-rating';
import { AccordionItem } from '../../accordion/accordian-item-interface';

@Component({
  selector: 'app-component-documentation',
  imports: [CommonModule,
    Card,
    Accordion,
    ProgressBar,
    StarRating],
  templateUrl: './component-documentation.html',
  styleUrl: './component-documentation.scss',
})
export class ComponentDocumentation {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];

  public progressValue = 25;
}
