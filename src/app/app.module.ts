import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CompanyPostsWrapperComponent } from './components/company-posts-wrapper/company-posts-wrapper.component';
import { PostComponent } from './components/company-posts-wrapper/post/post.component';
import { CommentComponent } from './components/company-posts-wrapper/post/comment/comment.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SideNavComponent, CompanyPostsWrapperComponent, PostComponent, CommentComponent, CompanyDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
