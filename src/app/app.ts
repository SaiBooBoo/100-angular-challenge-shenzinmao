import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Card } from './card/card';
import { Accordion } from "./accordion/accordion";
import { AccordionItem } from './accordion/accordian-item-interface';
import { ProgressBar } from "./progress-bar/progress-bar";
import { StarRating } from "./star-rating/star-rating";
import { TopOfPage } from "./top-of-page/top-of-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, Card, Accordion, ProgressBar, StarRating, TopOfPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
