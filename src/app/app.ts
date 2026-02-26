import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
