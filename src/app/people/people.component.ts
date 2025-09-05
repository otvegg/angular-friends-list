import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() setToFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeFromFav: EventEmitter<string> = new EventEmitter<string>();

  setFav(friend: string) {
    this.setToFav.emit(friend);
  }
  removeFav(friend: string) {
    this.removeFromFav.emit(friend);
  }
}
