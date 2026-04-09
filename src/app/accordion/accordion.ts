import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AccordionItem } from './accordian-item-interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.html',
  styleUrls: ['./accordion.scss'],
})
export class Accordion {
  @Input() public items: AccordionItem[] = [];

  public toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}
