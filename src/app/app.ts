import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Card } from './card/card';
import { Accordion } from "./accordion/accordion";
import { AccordionItem } from './accordion/accordian-item-interface';
import { ProgressBar } from "./progress-bar/progress-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, Card, Accordion, ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false
    }
  ]

  public progressValue = 25;
}
