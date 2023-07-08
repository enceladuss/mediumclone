import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PaginationComponent {

  @Input('totalItems') public totalItems: number = 1;
  @Input('pageSize') public pageSize: number = 25;
  @Input('currentPage') public currentPage: string;
  @Input('currentPageNumber') public currentPageNumber: number = 1;
  @Input('step') public step: number = 3;

  constructor() {
  }

  public get totalPages(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }

  public get prevPage(): number {
    return Math.max(this.currentPageNumber - 1, 1);
  }

  public get nextPage(): number {
    return Math.min(this.currentPageNumber + 1, this.totalPages);
  }

  public get isNextDisabled(): boolean {
    return this.currentPageNumber + 1 > this.totalPages;
  }

  public get isPreviousDisabled(): boolean {
    return this.currentPageNumber - 1 < 1;
  }


  public get pages(): number[] {
    const pages = [];
    const start = Math.max(this.currentPageNumber - this.step, 1);
    const end = Math.min(this.currentPageNumber + this.step, this.totalPages);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

}
