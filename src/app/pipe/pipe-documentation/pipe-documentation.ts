import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.html',
  styleUrls: ['./pipe-documentation.scss'],
})
export class PipeDocumentation {
  objectArray = [
    { content: 'Apple' },
    { content: 'Banana' },
    { content: 'Cherry' },
    { content: 'Date' },
    { content: 'Elderberry' }
  ];
}
