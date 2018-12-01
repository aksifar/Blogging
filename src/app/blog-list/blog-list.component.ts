import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../model/blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../services/blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  currentPage: number;
  blogPosts : BlogPost [][];
  @ViewChildren('tiles') blogPostTiles : QueryList<BlogPostTileComponent>;

  constructor(private blogDatasvc : BlogDataService) { }

  ngOnInit() {
    this.currentPage =0;
    this.blogPosts = this.blogDatasvc.getData();

  }

  updatePage(page: number)
  {
    this.currentPage = page;
  }

  expandAll()
  {
    this.blogPostTiles
    .forEach(tile => tile.expandSummary());
  }

  collapseAll()
  {
    this.blogPostTiles
    .forEach(tile => tile.collapseSummary());
  }
}
