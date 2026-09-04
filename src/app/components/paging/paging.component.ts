import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnChanges {
  @Input() public totalItems = 0;
  @Input() public pageSize = 10;

  public currentPage = 1;
  public pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.calculatePages();
  }

  private calculatePages(): void {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  public goToPage(page: number): void {
    if (page >= 1 && page <= this.pages.length) {
      this.currentPage = page;
    }
  }

  public previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  public nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }
}
