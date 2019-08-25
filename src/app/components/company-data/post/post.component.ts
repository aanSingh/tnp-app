import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
   @Input() company;
  constructor() {

  }

  ngOnInit() {
    console.log(this.company.posts)
  }

}