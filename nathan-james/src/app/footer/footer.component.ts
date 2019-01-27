import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nj-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showSuccessMessage: boolean = false;
  name: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  makeToast() {
    this.showSuccessMessage = true;

    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000)
  }
}
