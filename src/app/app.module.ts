import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { TruncatePipe } from './truncate.pipe';
import { BlogDataService } from './services/blog-data.service';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogPostTileComponent,
    PaginatorComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TruncatePipe,
              BlogDataService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
