import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companies: {
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
  }[];
  postData: { showCompanyPost: boolean, companyId: number } = null;
  displayCompany: {
    id: number,
    name: string,
    description: string,
    address: string,
    postCount: number
  };

  constructor() {
    this.companies = [{
      id: 1,
      name: "Yamaha",
      description: "Yamaha Motor Solutions India Pvt. Ltd. (YMSLI) is a subsidiary of Yamaha Motor Solutions Group, Japan. We specialize in providing a wide gamut of IT services to our clients worldwide with utmost quality, lower costs and timely delivery. Our constant endeavor is to help our clients to reduce the total cost of IT operations significantly while utilizing the vast skilled IT resources available in India with an onsite / off-shore delivery model.",
      address: "19/6, Mathura Rd, Indra Nagar, Sector 6, Faridabad, Haryana 121006",
      postCount: 10,
      posts: [{
        title: "Yamaha placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19"
      }]
    },
    {
      id: 2,
      name: "Thoughtworks",
      description: "description1",
      address: "address",
      postCount: 5,
      posts: [{
        title: "Yamaha placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19"
      }]
    },
    {
      id: 3,
      name: "Naggaro",
      description: "description1",
      address: "address",
      postCount: 7,
      posts: [{
        title: "Yamaha placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19"
      }]
    },
    {
      id: 4,
      name: "Altran",
      description: "description1",
      address: "address",
      postCount: 8,
      posts: [{
        title: "Yamaha placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19"
      }]
    },
    {
      id: 5,
      name: "To the new",
      description: "description1",
      address: "address",
      postCount: 4,
      posts: [{
        title: "Yamaha placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19"
      }]
    },
    {
      id: 6,
      name: "Indus valley partners",
      description: "description1",
      address: "address",
      postCount: 9,
      posts: [{
        title: "Yamaha placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19"
      }]
    }]
  }

  getPostData(postData) {
    console.log("Emitted....", postData.companyId);
    this.postData = postData;
    var temp;

    temp = this.companies.find(x => x.id == postData.companyId);
    this.displayCompany = temp;
    console.log(temp);

  }

}
