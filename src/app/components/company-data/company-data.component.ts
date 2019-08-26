import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit {
  @Input() postData: { showCompanyPost: boolean, companyId: number };
  @Input() displayCompany;
  // {
  //   id: number,
  //   name: string,
  //   description: string,
  //   address: string,
  //   postCount: number,
  //   posts: {
  //     post_id: number,
  //     title: string,
  //     post_description: string,
  //     posted_on: string,
  //     posted_by: string
  //   }[]
  // };
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

  backToCompany(){
    this.showPost = false;
  }

  ngOnInit() {

  }

}