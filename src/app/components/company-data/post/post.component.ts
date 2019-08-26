import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() company;
  @Output() post =new EventEmitter<{postId: number, postVisible: boolean}>();

  postVisible: boolean = false;
  postId: number;
  // post: {
  //   post_id: number,
  //   title: string,
  //   post_description: string,
  //   posted_on: string
  // }[];

  constructor() {

  }

  showPost(post_id: number) {
    this.postVisible = true;
    this.postId = post_id;

    this.post.emit({postId: this.postId, postVisible: this.postVisible})
    // var temp = this.company.posts.find(x => x.post_id == post_id);
    // this.post = temp;
  }
  ngOnInit() {
    // console.log(this.company.posts)
  }

}