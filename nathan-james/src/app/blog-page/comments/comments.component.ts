import { Component, OnInit, Input } from '@angular/core';
import { iComment } from '../mock-comments';

@Component({
  selector: 'nj-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comments: iComment[];
  name: string;
  comment: string;
  constructor() { }

  ngOnInit() {
  }

  toggleLove(index: number) {
    this.comments[index].loved = !this.comments[index].loved;
  }

  postComment() {
    this.comments.push({
      name: this.name,
      content: this.comment,
      isNathan: false,
      loved: false
    });
    this.comment = '';
    this.name = '';
  }
}
