import { Component, OnInit } from '@angular/core';
import { VEGAN_THANKSGIVING_COMMENTS, iComment } from "./mock-comments";

@Component({
  selector: 'nj-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  post1Comments: iComment[];
  post2Comments: iComment[];
  constructor() { }

  ngOnInit() {
    this.post1Comments = VEGAN_THANKSGIVING_COMMENTS;
    this.post2Comments = [];
  }

}
