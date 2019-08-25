import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit {
  @Input() postData: { showCompanyPost: boolean, companyId: number };
  @Input() displayCompany: {
    id: number,
    name: string,
    description: string,
    address: string,
    postCount: number,
    posts: {
      title: string,
      post_description: string,
      posted_on: string
    }[]
  };


  constructor() {

  }

  ngOnInit() {
    
  }

}