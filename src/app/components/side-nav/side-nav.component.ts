import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  showCompanyPost: boolean = false;
  companyId: Number;
  @Input() companies;
  // Post : {showCompanyPost: boolean, comapnyId: Number}[];
  @Output() showPost = new EventEmitter<{ showCompanyPost: boolean, companyId: Number }>();

  constructor() {
    
  }

  getPost(companyId: Number) {
    this.showCompanyPost = true;
    this.companyId = companyId;
    //console.log(this.showCompanyPost)
    this.showPost.emit({ showCompanyPost: this.showCompanyPost, companyId: this.companyId });
  }
  ngOnInit() {

  }

}