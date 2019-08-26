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
    link: string,
    posts: {
      post_id: number,
      title: string,
      post_description: string,
      posted_on: string,
      posted_by: string
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
      link: "http://www.ymsl.in/",
      description: "Yamaha Motor Solutions India Pvt. Ltd. (YMSLI) is a subsidiary of Yamaha Motor Solutions Group, Japan. We specialize in providing a wide gamut of IT services to our clients worldwide with utmost quality, lower costs and timely delivery. Our constant endeavor is to help our clients to reduce the total cost of IT operations significantly while utilizing the vast skilled IT resources available in India with an onsite / off-shore delivery model.",
      address: "19/6, Mathura Rd, Indra Nagar, Sector 6, Faridabad, Haryana 121006",
      posts: [{
        post_id: 11,
        title: "Yamaha placement experience",
        post_description: "Yamaha Motor Solutions India Pvt. Ltd. (YMSLI) is a subsidiary of Yamaha Motor Solutions Group, Japan. We specialize in providing a wide gamut of IT services to our clients worldwide with utmost quality, lower costs and timely delivery. Our constant endeavor is to help our clients to reduce the total cost of IT operations significantly while utilizing the vast skilled IT resources available in India with an onsite / off-shore delivery model.Yamaha Motor Solutions India Pvt. Ltd. (YMSLI) is a subsidiary of Yamaha Motor Solutions Group, Japan. We specialize in providing a wide gamut of IT services to our clients worldwide with utmost quality, lower costs and timely delivery. Our constant endeavor is to help our clients to reduce the total cost of IT operations significantly while utilizing the vast skilled IT resources available in India with an onsite / off-shore delivery model.",
        posted_on: "23-05-19",
        posted_by: "Sohan prasad kanti"
      }, {
        post_id: 12,
        title: "Yamaha placement experience 2",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Aayushi"
      }, {
        post_id: 13,
        title: "Yamaha placement experience 3",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Aanchal"
      }, {
        post_id: 14,
        title: "Yamaha placement experience 4",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Manju"
      }, {
        post_id: 15,
        title: "Yamaha placement experience 3",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Akshansh"
      }]
    },
    {
      id: 2,
      name: "Thoughtworks",
      description: "description1",
      address: "address",
      link: "http://www.ymsl.in/",
      posts: [{
        post_id: 21,
        title: "Thoughtworks placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Aanchal"
      }, {
        post_id: 22,
        title: "Thoughtworks placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Akshansh"
      }, {
        post_id: 23,
        title: "Thoughtworks placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Manju"
      }]
    },
    {
      id: 3,
      name: "Naggaro",
      description: "description1",
      address: "address",
      link: "http://www.ymsl.in/",
      posts: [{
        post_id: 31,
        title: "Naggaro placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Aayushi"
      }, {
        post_id: 32,
        title: "Naggaro placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Ashok"
      }]
    },
    {
      id: 4,
      name: "Altran",
      description: "description1",
      address: "address",
      link: "http://www.ymsl.in/",
      posts: [{
        post_id: 41,
        title: "Altran placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Manju"
      }, {
        post_id: 42,
        title: "Altran placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Aayushi"
      }]
    },
    {
      id: 5,
      name: "To the new",
      description: "description1",
      address: "address",
      link: "http://www.ymsl.in/",
      posts: []
    },
    {
      id: 6,
      name: "Indus valley partners",
      description: "description1",
      address: "address",
      link: "http://www.ymsl.in/",
      posts: [{
        post_id: 61,
        title: "Indus valley partners placement experience",
        post_description: "Great experience",
        posted_on: "23-05-19",
        posted_by: "Manju"
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
