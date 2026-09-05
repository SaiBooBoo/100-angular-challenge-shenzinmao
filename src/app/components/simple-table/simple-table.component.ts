import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {

  @Input() public tableData: any[] = [
    { first: 'Sai 1', last: 'Shen', age: 30 },
    { first: 'Sai 2', last: 'Shen', age: 31 },
    { first: 'Sai 3', last: 'Shen', age: 32 },
    { first: 'Sai 4', last: 'Shen', age: 33 },
    { first: 'Sai 5', last: 'Shen', age: 34 }
  ];

  public keepOrder = (): number => 0;

}
