import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  companies: { name: string, postCount: number }[];

  constructor() {
    this.companies = [{
      name: "Yamaha",
      postCount: 10
    },
    {
      name: "Thoughtworks",
      postCount: 5
    },
    {
      name: "Naggaro",
      postCount: 7
    },
    {
      name: "Altran",
      postCount: 8
    },
    {
      name: "To the new",
      postCount: 4
    },
    {
      name: "Indus valley partners",
      postCount: 9
    }]
  }

  ngOnInit() {
  }

}