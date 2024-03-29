import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Cards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Marty McFly'
        },
        date: 'November 5, 1955',
        image: 'assets/img/badu-live.png',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.',
        likes: 0
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sarah Connor'
        },
        date: 'May 12, 1984',
        image: 'assets/img/nin-live.png',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.',
        likes:1
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Dr. Ian Malcolm'
        },
        date: 'June 28, 1990',
        image: 'assets/img/queen-live.png',
        content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.',
        likes: 0
      }
    ];

  }

  public newCard () {
    let card = {
      user: {
        avatar: 'assets/img/ian-avatar.png',
        name: 'Dr. Gustavo Fernandes'
      },
      date: 'June 28, 1990',
      image: 'assets/img/queen-live.png',
      content: 'Your scientists were so preoccupied with whether or not they could, that they didn\'t stop to think if they should.',
      likes: 0};

    this.cardItems.push(card);
  }

}
