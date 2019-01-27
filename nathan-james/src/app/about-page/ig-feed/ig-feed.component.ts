import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nj-ig-feed',
  templateUrl: './ig-feed.component.html',
  styleUrls: ['./ig-feed.component.css']
})
export class IgFeedComponent implements OnInit {

  constructor() { }

  

  ngOnInit() {
    // instagram script loaded via html index file
    (<any>window).instgrm.Embeds.process()
  }

}
