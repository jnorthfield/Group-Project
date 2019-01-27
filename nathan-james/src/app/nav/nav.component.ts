import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'nj-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
	isCollapsed: boolean = true;
  	constructor() { }
  	ngOnInit() {
  	}

}
