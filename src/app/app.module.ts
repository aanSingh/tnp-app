import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CompanyDataComponent } from './components/company-data/company-data.component';
import { PostComponent } from './components/company-data/post/post.component';
import { CommentComponent } from './components/company-data/post/comment/comment.component';
import { CompanyInfoComponent } from './components/company-data/company-info/company-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SideNavComponent, CompanyDataComponent, PostComponent, CommentComponent, CompanyInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
