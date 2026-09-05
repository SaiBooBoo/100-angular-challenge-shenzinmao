import { Component, Input } from '@angular/core';

type TableRow = Record<string, string | number>;

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
})
export class SortTableComponent {
  @Input() public tableData: TableRow[] = [
    this.createPerson('Sai 1', 'Shen', '1996-04-12'),
    this.createPerson('Sai 2', 'Shen', '1994-09-28'),
    this.createPerson('Sai 3', 'Shen', '1992-01-06'),
    this.createPerson('Sai 4', 'Shen', '1990-11-19'),
    this.createPerson('Sai 5', 'Shen', '1988-07-03'),
  ];

  public sortDirection = false;

  private createPerson(first: string, last: string, birthdate: string): TableRow {
    return { first, last, birthdate, age: this.calculateAge(birthdate) };
  }

  private calculateAge(birthdate: string): number {
    const today = new Date();
    const dateOfBirth = new Date(`${birthdate}T00:00:00`);
    let age = today.getFullYear() - dateOfBirth.getFullYear();

    const birthdayHasNotHappened =
      today.getMonth() < dateOfBirth.getMonth() ||
      (today.getMonth() === dateOfBirth.getMonth() && today.getDate() < dateOfBirth.getDate());

    if (birthdayHasNotHappened) {
      age -= 1;
    }

    return age;
  }

  public sort(headerData: { key: string; value: string | number }): void {
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;

    if (typeof value === 'number') {
      this.sortNumber(key);
    } else if (typeof value === 'string' && this.isDate(value)) {
      this.sortDate(key);
    } else if (typeof value === 'string') {
      this.sortString(key);
    }
  }

  private isDate(value: string): boolean {
    return !Number.isNaN(Date.parse(value));
  }

  private sortDate(key: string): void {
    this.tableData.sort((value1: TableRow, value2: TableRow) => {
      const difference = Date.parse(String(value1[key])) - Date.parse(String(value2[key]));
      return this.sortDirection ? difference : -difference;
    });
  }

  private sortNumber(key: string): void {
    this.tableData.sort((value1: TableRow, value2: TableRow) => {
      const difference = Number(value1[key]) - Number(value2[key]);
      return this.sortDirection ? difference : -difference;
    });
  }

  private sortString(key: string): void {
    this.tableData.sort((value1: TableRow, value2: TableRow) => {
      const comparison = String(value1[key]).localeCompare(String(value2[key]), undefined, {
        sensitivity: 'base',
      });
      return this.sortDirection ? comparison : -comparison;
    });
  }
}
