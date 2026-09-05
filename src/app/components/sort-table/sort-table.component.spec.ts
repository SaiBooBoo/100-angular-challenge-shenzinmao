import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTableComponent } from './sort-table.component';

describe('SortTableComponent', () => {
  let component: SortTableComponent;
  let fixture: ComponentFixture<SortTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sorts numbers ascending, then descending', () => {
    component.tableData = [{ age: 30 }, { age: 10 }, { age: 20 }];

    component.sort({ key: 'age', value: 30 });
    expect(component.tableData.map((row) => row['age'])).toEqual([10, 20, 30]);

    component.sort({ key: 'age', value: 10 });
    expect(component.tableData.map((row) => row['age'])).toEqual([30, 20, 10]);
  });

  it('sorts strings without case sensitivity', () => {
    component.tableData = [{ name: 'zebra' }, { name: 'Apple' }, { name: 'banana' }];

    component.sort({ key: 'name', value: 'zebra' });

    expect(component.tableData.map((row) => row['name'])).toEqual(['Apple', 'banana', 'zebra']);
  });

  it('sorts date strings chronologically', () => {
    component.tableData = [
      { created: '2024-03-01' },
      { created: '2022-01-01' },
      { created: '2023-06-15' },
    ];

    component.sort({ key: 'created', value: '2024-03-01' });

    expect(component.tableData.map((row) => row['created'])).toEqual([
      '2022-01-01',
      '2023-06-15',
      '2024-03-01',
    ]);
  });
});
