import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopOfPage } from "./top-of-page/top-of-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, TopOfPage, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
