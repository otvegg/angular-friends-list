import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFav(p:string) {
    console.log("Person", p);
    this.favorite.push(p)
    // this.favorite = p;
  }

  removeFav(p:string) {
    this.favorite = this.favorite.filter((person) => person !== p);
    // this.favorite = null;
  }

  isFav(p:string) {
    if (this.favorite.indexOf(p) === -1) return false;
    else return true;
  }
}
