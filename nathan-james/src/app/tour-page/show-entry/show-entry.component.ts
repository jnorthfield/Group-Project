import { Component, Input } from '@angular/core';
import { iTour } from '../mock-tour-data';

@Component({
  selector: 'nj-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.css']
})
export class ShowEntryComponent {
  @Input() show: iTour;

  onTicketsClicked() {
    if(this.show.ticketsAvailable) {
      window.open(this.show.ticketsLink, "_blank");
    }
  }

  onRsvpClicked() {
    window.open(this.show.bandInTownLink, "_blank");
  }

}
