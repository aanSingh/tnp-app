import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Output() posts: { title: String, content: String, postedOn: String, company: String }[];
  constructor() {
    this.posts = [{
      title: "Title1",
      content: "Content1",
      postedOn: "Date Time",
      company: "Naggaro"
    }, {
      title: "Title2",
      content: "Content2",
      postedOn: "Date Time",
      company: "Naggaro"
    }, {
      title: "Title3",
      content: "Content3",
      postedOn: "Date Time",
      company: "To the new"
    }];
  }

  ngOnInit() {
  }

}