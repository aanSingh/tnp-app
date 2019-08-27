import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-posts-wrapper',
  templateUrl: './company-posts-wrapper.component.html',
  styleUrls: ['./company-posts-wrapper.component.css']
})
export class CompanyPostsWrapperComponent implements OnInit {
  @Input() postData: { showCompanyPost: boolean, companyId: number };
  @Input() displayCompany;

  post: {
    post_id: number,
    title: string,
    post_description: string,
    posted_on: string,
    posted_by: string
  };
  showPost: boolean;


  constructor() {

  }

  displayPost(event) {
    console.log(event)
    var temp = this.displayCompany.posts.find(x => x.post_id == event.postId);
    this.post = temp;
    this.showPost = event.postVisible;
  }

  backToCompany() {
    this.showPost = false;
  }

  ngOnInit() {

  }

}