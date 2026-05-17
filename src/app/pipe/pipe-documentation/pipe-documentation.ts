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

  public flattenData = [1,2, [3], [4,[5,6,[7]]]];

  public modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  public reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
