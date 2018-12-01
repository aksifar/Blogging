import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  
  @Input() numberOfPages;
  @Output() pageNumberclick = new EventEmitter<number>();
  pages : number[];
  pageclick :  number;
  constructor() { }
  ngOnInit() {
    this.pages = new Array(this.numberOfPages);
  }

  pageNumberClick(currentPage: number)
  {
    this.pageNumberclick.emit(currentPage);
  }
}
