import { Component, OnInit } from '@angular/core';
import { TOURDATES, iTour } from './mock-tour-data';

@Component({
  selector: 'nj-tour-page',
  templateUrl: './tour-page.component.html',
  styleUrls: ['./tour-page.component.css']
})
export class TourPageComponent implements OnInit {

  shows: iTour[] = [];
  constructor() { }

  ngOnInit() {
    this.shows = TOURDATES;
  }

}
