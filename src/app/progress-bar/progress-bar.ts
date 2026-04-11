import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.html',
  styleUrls: ['./progress-bar.scss'],
})
export class ProgressBar {
  @Input() public value = 0;
  @Input() public max = 100;
}
