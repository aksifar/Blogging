import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../model/blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input('post') post: BlogPost;
  
  constructor(private truncate: TruncatePipe) { }
  fullSummary: string;

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.collapseSummary();
  }

  expandSummary(){
       this.post.summary = this.fullSummary;
  }

  collapseSummary()
  {
    this.post.summary = this.truncate.transform(this.post.summary, ['50']);
  }
}
